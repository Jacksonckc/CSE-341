const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var cors = require('cors');
app.use(cors());
app.use(express.json());

const mongodb = require('./db/connection');
const port = process.env.PORT || 3000;

app.use('/', require('./routes')).use(bodyParser.json());

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on port ${port}`);
  }
});
