const routes = require('express').Router();

routes.get('/name', (req, res) => {
  res.send('Jackson Chan');
});

module.exports = routes;
