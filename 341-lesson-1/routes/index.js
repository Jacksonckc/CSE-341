const routes = require('express').Router();

routes.get('/name', (req, res) => {
  res.send('Jackson Chan');
});

routes.get('/', (req, res) => {
  res.send('Talia Chan');
});

module.exports = routes;
