var express = require('express');
var app = express();

// app.use(express.bodyParser());
const mongodb = require('./db/connection');
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on port ${port}`);
  }
});
