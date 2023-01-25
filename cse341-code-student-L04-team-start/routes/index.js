const routes = require('express').Router();
const temple = require('./temple');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = require('../swagger.json');

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
routes.use('/temples', temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs'
    };
    res.send(docData);
  })
);

module.exports = routes;
