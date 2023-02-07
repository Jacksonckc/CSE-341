const routes = require('express').Router();
const controllers = require('../controllers');

routes.get('/', controllers.getUsers);
routes.get('/:id', controllers.getUser);
routes.post('/', controllers.addUser);
routes.put('/:id', controllers.changeUserInfo);
routes.delete('/:id', controllers.deleteUser);

routes.get('/:id/userSkill', controllers.getAllUserSkills);
routes.post('/userSkill', controllers.addUserSkill);
routes.delete('/userSkill');

module.exports = routes;
