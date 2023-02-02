const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const mongodb = require('./src/db/connection');

const port = process.env.PORT || 3000;
const app = express();

// Middleware
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

// Root path
app.use('/', require('./src/routes'));

// Connect to mongo
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on port ${port}`);
  }
});
