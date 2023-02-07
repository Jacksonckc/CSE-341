const { ObjectID } = require('bson');
const mongodb = require('../db/connection');

const getProjects = async (req, res) => {
  // #swagger.description = 'Get all the project information'
  var result;
  try {
    result = await mongodb.getDb().db('acorn_currency').collection('projects').find();
  } catch (e) {
    console.log(e);
  } finally {
    result
      ? result.toArray().then((lists) => {
          res.status(200).json(lists);
        })
      : res.status(404).send('Failed to fetch all projects');
  }
};

const getProject = async (req, res) => {
  // #swagger.description = 'Get a specific the project information by id'
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('projects')
      .findOne({ _id: ObjectID(req.params.id) });
  } catch (e) {
    console.log(e);
  } finally {
    result
      ? res.status(200).json(result)
      : res.status(404).send('Seems like the id you are using does not exist');
  }
};

const addProject = async (req, res) => {
  /* 
  #swagger.description = 'Create a new project' 
  #swagger.parameters['Project Info'] = {
    in: 'body',
    type: 'object',
    required: true,
    description: 'All necessary data to create a new project',
    schema: { $ref: '#/definitions/Project' }
  } */
  var result;
  try {
    result = await mongodb.getDb().db('acorn_currency').collection('projects').insertOne(req.body);
  } catch (e) {
    console.log(e);
  } finally {
    result ? res.status(201).json(result) : res.status(404);
  }
};

const changeProjectInfo = async (req, res) => {
  /*  
  #swagger.description = 'Modify a project's info' 
  #swagger.parameters['Project Info'] = {
    in: 'body',
    type: 'object',
    required: true,
    description: 'Please only input what needs to be changed, if you leave the default value, they will be updated to the DB',
    schema: { $ref: '#/definitions/Project' },
  } */
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('projects')
      .updateOne({ _id: ObjectID(req.params.id) }, { $set: req.body });
  } catch (e) {
    console.log(e);
  } finally {
    result ? res.status(200).json(req.body) : res.sendStatus(404);
  }
};

const deleteProject = async (req, res) => {
  // #swagger.description = 'Delete project information'
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('projects')
      .deleteOne({ _id: ObjectID(req.params.id) });
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
};

module.exports = { getProjects, getProject, addProject, changeProjectInfo, deleteProject };
