const { ObjectID } = require('bson');
const mongodb = require('../db/connection');

const getUser = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('users')
      .findOne({ _id: ObjectID(req.params.id) });
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(404).send('Seems like the id you are using does not exist');
  }
};

const addUser = async (req, res) => {
  const result = await mongodb.getDb().db('acorn_currency').collection('users').insertOne(req.body);
  result ? res.status(201).json(result) : res.status(404);
};

const getProject = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('projects')
      .findOne({ _id: ObjectID(req.params.id) });
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(404).send('The project does not exist');
  }
};

const addProject = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db('acorn_currency')
    .collection('projects')
    .insertOne(req.body);
  result ? res.status(201).json(result) : res.status(404);
};

module.exports = { getUser, addUser, getProject, addProject };
