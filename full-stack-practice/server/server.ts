import express from 'express';
import { errorMiddleware, ClientError } from './lib/index';
import pg from 'pg';

const app = express();
const db = new pg.Pool({
  connectionString: `postgres://dev:dev@localhost/fullStackCatalog`,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.static('public'));

app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
    select *
      from "products";
    `;
    const resp = await db.query(sql);
    const products = resp.rows;
    res.json(products);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Number.isInteger(+productId)) {
      throw new ClientError(400, 'productId must be an integer.');
    }
    const sql = `
    select *
      from "products"
      where "productId" = $1;
    `;
    const param = [productId];
    const resp = await db.query(sql, param);
    const [product] = resp.rows;
    if (!product) {
      throw new ClientError(404, `product ${productId} not found`);
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
