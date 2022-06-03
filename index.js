const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('hi');

  res.end();
});

app.listen(5001, () => {
  console.log('Server started');
});