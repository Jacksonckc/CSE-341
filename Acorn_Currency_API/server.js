const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// const Database = require('./src/db/database');

dotenv.config();
// const db = new Database();

const port = process.env.PORT || '8080';
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen('8080', (e) => {
  e ? console.log(e) : console.log(`The server is running on port: ${port}.`);
});
