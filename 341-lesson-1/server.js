const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const mongodb = require('./db/connection');
const swaggerDocs = require('./swagger.json');

const app = express();
const port = process.env.PORT || 3000;

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
