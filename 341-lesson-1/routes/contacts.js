const routes = require('express').Router();
const controller = require('../controller');

routes.get('/', controller.getContacts);
routes.get('/:id', controller.getContactById);

module.exports = routes;
