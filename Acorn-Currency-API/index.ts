import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import mongodb from './db/connection';
import routes from './routes/';

dotenv.config();

const port: string = process.env.PORT || '8080';
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

mongodb.initDb((err: string) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on port ${port}`);
  }
});
