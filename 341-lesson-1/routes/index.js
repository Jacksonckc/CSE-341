const routes = require('express').Router();
const controller = require('../controller');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = require('../swagger.json');

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
routes.get('/', controller.getName);
routes.get('/name', controller.getAnotherName);

routes.use('/contacts', require('./contacts'));

module.exports = routes;
