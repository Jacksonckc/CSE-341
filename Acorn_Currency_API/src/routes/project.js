const express = require('express');
const controllers = require('../controllers');

const routes = express.Router();
routes.get('/', controllers.getProjects);
routes.get('/:id', controllers.getProject);
routes.post('/', controllers.addProject);
routes.put('/:id', controllers.changeProjectInfo);
routes.delete('/:id', controllers.deleteProject);

module.exports = routes;
