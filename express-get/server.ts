import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select
      "filmId",
      "title",
      "description",
      "replacementCost"
      from "films"
      order by "replacementCost" desc
      limit 2;
    `;
    const resp = await db.query(sql);
    const films = resp.rows;
    if (!films) {
      throw new ClientError(404, 'Films not found');
    }
    res.json(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  const { filmId } = req.params;
  try {
    if (!Number.isInteger(+filmId)) {
      throw new ClientError(400, 'valid filmId required');
    }
    const sql = `
      select
        "filmId",
        "title",
        "description"
        from "films"
        where "filmId" = $1;
    `;
    const param = [filmId];
    const resp = await db.query(sql, param);
    const [film] = resp.rows;
    if (!film) {
      throw new ClientError(404, 'Film not found');
    }
    res.json(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
