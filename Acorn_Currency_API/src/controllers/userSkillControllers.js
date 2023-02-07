const { ObjectID } = require('bson');
const mongodb = require('../db/connection');
const fetch = require('node-fetch-commonjs');

const getAllUserSkillsByUserId = async (req, res) => {
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
          console.log(lists);
          for (let item of lists) {
            const response = await fetch(`${process.env.ENV}/skill/${item.skillId}`);
            let skillInfo = await response.json();
            skillInfo = { userSkillId: item._id, ...skillInfo };
            response && skillArray.push(skillInfo);
          }
          res.status(200).json(skillArray);
        })
      : res.status(404).send('Failed to fetch all skills for the user.');
  }
};

const addUserSkill = async (req, res) => {
  /* 
    #swagger.description = 'Create a new userSkill' 
    #swagger.parameters['UserSkill Info'] = {
      in: 'body',
      type: 'object',
      required: true,
      description: 'All necessary data to create a new userSkill',
      schema: { $ref: '#/definitions/UserSkill' }
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

const deleteUserSkill = async (req, res) => {
  // #swagger.description = 'Delete userSkill information'
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('user_skills')
      .deleteOne({ _id: ObjectID(req.params.id) });
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
};

module.exports = { getAllUserSkillsByUserId, addUserSkill, deleteUserSkill };
