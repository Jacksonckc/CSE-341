const routes = require('express').Router();
const controller = require('../controller');

routes.get('/', controller.getContacts);
routes.get('/:id', controller.getContactById);
routes.post('/', controller.createNewContact);
routes.put('/:id', controller.updateContact);
routes.delete('/:id', controller.removeContact);

module.exports = routes;
