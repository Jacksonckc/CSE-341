const { ObjectID } = require('bson');
const mongodb = require('../db/connection');
const fetch = require('node-fetch-commonjs');

const getAllProjectLikesByUserId = async (req, res) => {
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('project_likes')
      .find({ userId: req.params.id });
  } catch (e) {
    console.log(e);
  } finally {
    var projectArray = [];
    result
      ? result.toArray().then(async (lists) => {
          console.log(lists);
          for (let item of lists) {
            const response = await fetch(`${process.env.ENV}/project/${item.projectId}`);
            let projectInfo = await response.json();
            projectInfo = { projectLikeId: item._id, ...projectInfo };
            response && projectArray.push(projectInfo);
          }
          res.status(200).json(projectArray);
        })
      : res.status(404).send('Failed to fetch all project the user likes.');
  }
};

const addProjectLike = async (req, res) => {
  /* 
    #swagger.description = 'Likes a project' 
    #swagger.parameters['ProjectLikes Info'] = {
      in: 'body',
      type: 'object',
      required: true,
      description: 'All necessary data to create a new projectLike',
      schema: { $ref: '#/definitions/ProjectLike' }
    } */
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('project_likes')
      .insertOne(req.body);
  } catch (e) {
    console.log(e);
  } finally {
    result ? res.status(201).json(result) : res.status(404);
  }
};

const deleteProjectLike = async (req, res) => {
  // #swagger.description = 'Delete projectLike information'
  var result;
  try {
    result = await mongodb
      .getDb()
      .db('acorn_currency')
      .collection('project_likes')
      .deleteOne({ _id: ObjectID(req.params.id) });
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
};

module.exports = { getAllProjectLikesByUserId, addProjectLike, deleteProjectLike };
