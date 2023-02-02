const routes = require('express').Router();
const controllers = require('../controllers');

routes.get('/:id', controllers.getUser);
routes.post('/', controllers.addUser);

module.exports = routes;
