import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectionString = process.env.MONGODB_URI || '';

export default class Database {
  init = async () => {
    await mongoose.connect(connectionString);
    console.log('Connected successfully to server');
  };
}
