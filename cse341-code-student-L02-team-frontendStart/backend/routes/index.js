const routes = require('express').Router();

const controller = require('../controller');

routes.get('/professional', controller.getProfessionals);

module.exports = routes;
