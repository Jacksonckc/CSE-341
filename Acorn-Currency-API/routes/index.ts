import express from 'express';
import controller from '../controllers';
import swaggerDocs from '../swagger.json';

import swaggerUi from 'swagger-ui-express';

const routes = express.Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
routes.get('/', controller.getUsers);

// routes.use('/contacts', require('./contacts'));

export default routes;
