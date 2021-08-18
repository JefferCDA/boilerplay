const app = require('express').Router();
const response = require('../libraries/middlewares/catch');

const players = require('./players');

app.use('/v1', players);

app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.use(response);

module.exports = app;
