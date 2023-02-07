const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = require('../../swagger.json');
const project = require('./project');
const user = require('./user');
const skill = require('./skill');

const routes = express.Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
routes.use('/project', project);
routes.use('/skill', skill);
routes.use('/user', user);

module.exports = routes;
