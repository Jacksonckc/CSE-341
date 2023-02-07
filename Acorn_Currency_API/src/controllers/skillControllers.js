const { ObjectID } = require('bson');
const mongodb = require('../db/connection');

const getSkills = async (req, res) => {
  // #swagger.description = 'Get all the skill information'
  var result;
  try {
    result = await mongodb.getDb().db('acorn_currency').collection('skills').find();
  } catch (e) {
    console.log(e);
  } finally {
    result
      ? result.toArray().then((lists) => {
          res.status(200).json(lists);
        })
      : res.status(404).send('Failed to fetch all skills');
  }
};

const getSkill = async (req, res) => {
  // #swagger.description = 'Get a specific the skill information by id'
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('skills')
      .findOne({ _id: ObjectID(req.params.id) });
  } catch (e) {
    console.log(e);
  } finally {
    result
      ? res.status(200).json(result)
      : res.status(404).send('Seems like the id you are using does not exist');
  }
};

const addSkill = async (req, res) => {
  /* 
  #swagger.description = 'Create a new user' 
  #swagger.parameters['Skill Info'] = {
    in: 'body',
    type: 'object',
    required: true,
    description: 'All necessary data to create a new skill',
    schema: { $ref: '#/definitions/Skill' }
  } */
  var result;
  try {
    result = await mongodb.getDb().db('acorn_currency').collection('skills').insertOne(req.body);
  } catch (e) {
    console.log(e);
  } finally {
    result ? res.status(201).json(result) : res.status(404);
  }
};

const changeSkillInfo = async (req, res) => {
  /*  
  #swagger.description = 'Modify a user's info' 
  #swagger.parameters['Skill Info'] = {
    in: 'body',
    type: 'object',
    required: true,
    description: 'Please only input what needs to be changed, if you leave the default value, they will be updated to the DB',
    schema: { $ref: '#/definitions/Skill' },
  } */
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('skills')
      .updateOne({ _id: ObjectID(req.params.id) }, { $set: req.body });
  } catch (e) {
    console.log(e);
  } finally {
    result ? res.status(200).json(req.body) : res.sendStatus(404);
  }
};

const deleteSkill = async (req, res) => {
  // #swagger.description = 'Delete skill information'
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('skills')
      .deleteOne({ _id: ObjectID(req.params.id) });
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
};

module.exports = { getSkills, getSkill, addSkill, changeSkillInfo, deleteSkill };
