const routes = require('express').Router();
const controllers = require('../controllers');

routes.get('/', controllers.getSkills);
routes.get('/:id', controllers.getSkill);
routes.post('/', controllers.addSkill);
routes.put('/:id', controllers.changeSkillInfo);
routes.delete('/:id', controllers.deleteSkill);

module.exports = routes;
