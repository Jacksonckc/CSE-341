const routes = require('express').Router();
const controllers = require('../controllers');

routes.get('/', controllers.getUsers);
routes.get('/:id', controllers.getUser);
routes.post('/', controllers.addUser);
routes.put('/:id', controllers.changeUserInfo);
routes.delete('/:id', controllers.deleteUser);

routes.get('/:id/userSkill', controllers.getAllUserSkillsByUserId);
routes.post('/userSkill', controllers.addUserSkill);
routes.delete('/userSkill/:id', controllers.deleteUserSkill);

routes.get('/:id/projectLike', controllers.getAllProjectLikesByUserId);
routes.post('/projectLike', controllers.addProjectLike);
routes.delete('/projectLike/:id', controllers.deleteProjectLike);

module.exports = routes;
