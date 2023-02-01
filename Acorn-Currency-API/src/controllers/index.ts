import { Request, Response } from 'express';

// User route
const getUsers = async (req: Request, res: Response) => {
  // try {
  //   const result = mongodb.getDb().db('acorn_currency').collection('users').find();
  //   result.toArray().then((lists) => {
  //     res.setHeader('Content-Type', 'application/json');
  //     res.status(200).json(lists);
  //   });
  // } catch (e) {
  //   console.log(e);
  // }
};

const addUser = async (req: Request, res: Response) => {
  // try {
  //   const result = mongodb.getDb().db('acorn_currency').collection('users').insertOne(req.body);
  //   res.json(result);
  // } catch (e) {
  //   console.log(e);
  // }
};

// Project route
const getProjects = async (req: Request, res: Response) => {
  // try {
  //   const result = mongodb.getDb().db('acorn_currency').collection('projects').find();
  //   result.toArray().then((lists) => {
  //     res.setHeader('Content-Type', 'application/json');
  //     res.status(200).json(lists);
  //   });
  // } catch (e) {
  //   console.log(e);
  // }
};

const addProject = async (req: Request, res: Response) => {
  // try {
  //   const result = mongodb.getDb().db('acorn_currency').collection('projects').insertOne(req.body);
  //   res.json(result);
  // } catch (e) {
  //   console.log(e);
  // }
};

export default {
  getUsers,
  addUser,
  getProjects,
  addProject
};
