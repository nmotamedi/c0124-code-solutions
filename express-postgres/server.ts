import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

pg.types.setTypeParser(pg.types.builtins.NUMERIC, parseFloat);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select
      "title", "filmId"
      from "films"
      order by "replacementCost" desc;
    `;
    const resp = await db.query(sql);
    const filmRows = resp.rows;
    if (!filmRows) {
      throw new ClientError(404, 'Table not found');
    }
    res.send(filmRows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
    select
      "title"
      from "films"
      where "filmId" = $1;
    `;
    const param = [filmId as string];
    const resp = await db.query(sql, param);
    const [row] = resp.rows;
    if (!row) {
      throw new ClientError(404, 'Film not Found');
    }
    res.send(row);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    if (title === undefined) {
      throw new ClientError(400, 'title is required');
    }
    const sql = `
      update
        "films"
        set "title" = $1
        where "filmId" = $2
        returning *;
    `;
    const param = [title as string, filmId as string];
    const resp = await db.query(sql, param);
    const [row] = resp.rows;
    if (!row) {
      throw new ClientError(404, 'filmId not found');
    }
    res.send('Successfully updated!');
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
