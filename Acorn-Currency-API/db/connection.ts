import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const connectionString = process.env.MONGODB_URI || '';
let _db: MongoClient;

const initDb = (callback: Function) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(connectionString) // Needs to not have ""
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

export default { initDb, getDb };
