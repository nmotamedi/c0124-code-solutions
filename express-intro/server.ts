import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log(`The date is ${new Date()}`);
  next();
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
