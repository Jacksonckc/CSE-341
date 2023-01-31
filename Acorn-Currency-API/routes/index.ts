import express from 'express';
import swaggerUi from 'swagger-ui-express';

// import controller from '../controllers';
import swaggerDocs from '../swagger.json';
import user from './user';
import project from './project';

const routes = express.Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes.use('/user', user);
routes.use('/project', project);

export default routes;
