import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('Receiving Get response');
});

app.get('/notes', (req, res) => {
  res.send('Receiving Notes');
});

app.post('/notes/:id', (req, res) => {
  res.send(`Adding in ${req.params.id}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
