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

app.use(express.json());
// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.post('/api/actors', async (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  try {
    if (!firstName) {
      throw new ClientError(400, 'firstName is required');
    }
    if (!lastName) {
      throw new ClientError(400, 'lastName is required');
    }
    const sql = `
    insert into "actors" ("firstName", "lastName")
    values ($1, $2)
    returning *;
    `;
    const params = [firstName, lastName];
    const resp = await db.query(sql, params);
    const [row] = resp.rows;
    if (!row) {
      throw new ClientError(404, 'Addition not found');
    }
    res.status(201).json(row);
  } catch (err) {
    next(err);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const { actorId } = req.params;
  try {
    if (!firstName) {
      throw new ClientError(400, 'firstName is required');
    }
    if (!lastName) {
      throw new ClientError(400, 'lastName is required');
    }
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, 'valid ID is required');
    }
    const sql = `
    update "actors"
      set "firstName" = $1,
      "lastName" = $2
      where "actorId" = $3
      returning *;
    `;
    const params = [firstName, lastName, actorId as string];
    const resp = await db.query(sql, params);
    const [row] = resp.rows;
    if (!row) {
      throw new ClientError(404, 'actorId is out of range');
    }
    res.status(200).json(row);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  const { actorId } = req.params;
  try {
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, 'valid ID is required');
    }
    const sql = `
    delete
      from "actors"
      where "actorId" = $1
      returning *;
    `;
    const params = [actorId as string];
    const resp = await db.query(sql, params);
    const [row] = resp.rows;
    if (!row) {
      throw new ClientError(404, 'actorId is out of range');
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
