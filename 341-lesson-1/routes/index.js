const routes = require('express').Router();

const controller = require('../controller');

routes.get('/', controller.getName);
routes.get('/name', controller.getAnotherName);
routes.get('/mongoData', controller.getMongoData);
routes.get('/getAllCollections', controller.getAllCollections);
routes.put('/updateDoc', controller.updateDoc);

module.exports = routes;
