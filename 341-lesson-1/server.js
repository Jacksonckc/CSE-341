const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connection');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Contacts API',
      description: 'Contacts API information',
      contact: {
        name: 'Jackson'
      },
      servers: ['http://localhost:3000']
    }
  },
  apis: ['server.js', './routes/*.js']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', require('./routes')).use(bodyParser.json());

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on port ${port}`);
  }
});
