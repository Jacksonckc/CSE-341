const express = require('express');
const controllers = require('../controllers');

const routes = express.Router();
routes.get('/:id', controllers.getProject);
routes.post('/', controllers.addProject);

module.exports = routes;
