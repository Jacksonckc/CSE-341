const { ObjectID } = require('bson');
const mongodb = require('../db/connection');

const getUsers = async (req, res) => {
  // #swagger.description = 'Get all the user information'
  var result;
  try {
    result = await mongodb.getDb().db('acorn_currency').collection('users').find();
  } catch (e) {
    console.log(e);
  } finally {
    result
      ? result.toArray().then((lists) => {
          res.status(200).json(lists);
        })
      : res.status(404).send('Failed to fetch all users');
  }
};

const getUser = async (req, res) => {
  // #swagger.description = 'Get a specific the user information by id'
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('users')
      .findOne({ _id: ObjectID(req.params.id) });
  } catch (e) {
    console.log(e);
  } finally {
    result
      ? res.status(200).json(result)
      : res.status(404).send('Seems like the id you are using does not exist');
  }
};

const addUser = async (req, res) => {
  /* 
  #swagger.description = 'Create a new user' 
  #swagger.parameters['User Info'] = {
    in: 'body',
    type: 'object',
    required: true,
    description: 'All necessary data to create a new user',
    schema: { $ref: '#/definitions/User' }
  } */
  var result;
  try {
    result = await mongodb.getDb().db('acorn_currency').collection('users').insertOne(req.body);
  } catch (e) {
    console.log(e);
  } finally {
    result ? res.status(201).json(result) : res.status(404);
  }
};

const changeUserInfo = async (req, res) => {
  /*  
  #swagger.description = 'Modify a user's info' 
  #swagger.parameters['User Info'] = {
    in: 'body',
    type: 'object',
    required: true,
    description: 'Please only input what needs to be changed, if you leave the default value, they will be updated to the DB',
    schema: { $ref: '#/definitions/User' },
  } */
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('users')
      .updateOne({ _id: ObjectID(req.params.id) }, { $set: req.body });
  } catch (e) {
    console.log(e);
  } finally {
    result ? res.status(200).json(req.body) : res.sendStatus(404);
  }
};

const deleteUser = async (req, res) => {
  // #swagger.description = 'Delete user information'
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('users')
      .deleteOne({ _id: ObjectID(req.params.id) });
  } catch (e) {
    console.log(e);
  } finally {
    result ? res.sendStatus(204) : res.sendStatus(404);
  }
};

module.exports = { getUsers, getUser, addUser, changeUserInfo, deleteUser };
