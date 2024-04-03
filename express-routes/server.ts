import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res, next) => {
  res.send('Receiving Get response');
  next();
});

app.get('/notes', (req, res, next) => {
  res.send('Receiving Notes');
  next();
});

app.post('/notes/:id', (req, res, next) => {
  res.send(`Adding in ${req.params.id}`);
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
