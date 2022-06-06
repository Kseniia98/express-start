const express = require('express');
const { middleWare } = require('./middleWare');


const app = express();

app.get('/users/:id/get', middleWare, getHome)

app.listen(5001, () => {
  console.log('Server started');
});