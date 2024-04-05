import express from 'express';
import pg from 'pg';
import { errorMiddleware, ClientError } from './lib';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades";
    `;
    const resp = await db.query(sql);
    const rows = resp.rows;
    res.send(rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId must be an integer');
    }
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1;
    `;
    const param = [gradeId];
    const resp = await db.query(sql, param);
    const [row] = resp.rows;
    if (!row) {
      throw new ClientError(
        404,
        `gradeId ${gradeId} does not exist on database`
      );
    }
    res.json(row);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name) {
      throw new ClientError(400, 'Name is required');
    }
    if (!course) {
      throw new ClientError(400, 'Course is required');
    }
    if (
      !score ||
      !Number.isInteger(+score) ||
      !(+score >= 0) ||
      !(+score <= 100)
    ) {
      throw new ClientError(
        400,
        'Score (as integer between 0-100) is required'
      );
    }
    const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;
    const params = [name, course, score];
    const resp = await db.query(sql, params);
    const [row] = resp.rows;
    res.status(201).json(row);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId must be an integer');
    }
    if (!name) {
      throw new ClientError(400, 'Name is required');
    }
    if (!course) {
      throw new ClientError(400, 'Course is required');
    }
    if (
      !score ||
      !Number.isInteger(+score) ||
      !(+score >= 0) ||
      !(+score <= 100)
    ) {
      throw new ClientError(
        400,
        'Score (as integer between 0-100) is required'
      );
    }
    const sql = `
    update "grades"
      set "name" = $2,
      "course" = $3,
      "score" = $4
      where "gradeId" = $1
      returning *;
    `;
    const params = [gradeId, name, course, score];
    const resp = await db.query(sql, params);
    const [row] = resp.rows;
    if (!row) {
      throw new ClientError(404, `GradeId ${gradeId} not found`);
    }
    res.json(row);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId must be an integer');
    }
    const sql = `
      delete
        from "grades"
        where "gradeId" = $1
        returning *;
    `;
    const param = [gradeId];
    const resp = await db.query(sql, param);
    const [row] = resp.rows;
    if (!row) {
      throw new ClientError(404, `GradeId ${gradeId} not found`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
