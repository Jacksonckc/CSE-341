import { Request, Response } from 'express';
import mongodb from '../db/connection';

const getUsers = async (req: Request, res: Response) => {
  const result = mongodb.getDb().db('acorn_currency').collection('users').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

export default {
  getUsers
};
