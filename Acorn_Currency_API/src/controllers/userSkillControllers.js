const { ObjectID } = require('bson');
const mongodb = require('../db/connection');
const fetch = require('node-fetch-commonjs');

const getAllUserSkills = async (req, res) => {
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('user_skills')
      .find({ userId: req.params.id });
  } catch (e) {
    console.log(e);
  } finally {
    var skillArray = [];
    result
      ? result.toArray().then(async (lists) => {
          for (let item of lists) {
            const response = await fetch(`${process.env.ENV}/skill/${item.skillId}`);
            const skillInfo = await response.json();
            response && skillArray.push(skillInfo);
          }
          res.status(200).json(skillArray);
        })
      : res.status(404).send('Failed to fetch all skills for the user.');
  }
};

const addUserSkill = async (req, res) => {
  /* 
    #swagger.description = 'Create a new user' 
    #swagger.parameters['UserSkill Info'] = {
      in: 'body',
      type: 'object',
      required: true,
      description: 'All necessary data to create a new skill',
      schema: { $ref: '#/definitions/UserSkills' }
    } */
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('user_skills')
      .insertOne(req.body);
  } catch (e) {
    console.log(e);
  } finally {
    result ? res.status(201).json(result) : res.status(404);
  }
};

module.exports = { getAllUserSkills, addUserSkill };
