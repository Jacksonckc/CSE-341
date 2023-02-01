import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import Database from '@db/connection';
import routes from '@routes/index';
const express = require('express');

dotenv.config();

const port: string = process.env.PORT || '8080';
const app = express();
const db = new Database();

await db.init();
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);
