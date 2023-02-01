const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const port: string = process.env.PORT || '8080';
const app = express();

app.use(cors());

app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});

app.listen('8080', (e: Error) => {
  e ? console.log(e) : console.log(`The server is running on port: ${port}.`);
});

export default app;
