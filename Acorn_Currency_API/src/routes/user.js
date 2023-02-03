const routes = require('express').Router();
const controllers = require('../controllers');

routes.get('/', controllers.getUsers);
routes.get('/:id', controllers.getUser);
routes.post('/', controllers.addUser);
routes.put('/:id', controllers.changeUserInfo);
routes.delete('/:id', controllers.deleteUser);

module.exports = routes;
