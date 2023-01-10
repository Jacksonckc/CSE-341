const routes = require('express').Router();
const controller = require('../controller');

routes.get('/name', controller.getName);

routes.get('/', controller.getAnotherName);

module.exports = routes;
