const mongodb = require('../db');

const getName = (req, res) => {
  res.send('Talia Chan');
};

const getAnotherName = (req, res) => {
  res.send('Jackson Chan');
};

const getMongoData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

module.exports = { getAnotherName, getName, getMongoData };
