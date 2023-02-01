import express from 'express';
import controller from '../controllers';

const routes = express.Router();
routes.get('/', controller.getProjects);
routes.post('/', controller.addProject);

export default routes;
