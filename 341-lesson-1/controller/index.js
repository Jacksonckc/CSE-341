const { ObjectID } = require('bson');
const mongodb = require('../db/connection');

const getName = (req, res) => {
  res.send('Talia Chan');
};

const getAnotherName = (req, res) => {
  res.send('Jackson Chan');
};

const getMongoData = async (req, res, next) => {
  const result = await mongodb.getDb().db('db1').collection('col1').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const updateDoc = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db('sample_airbnb')
    .collection('listingsAndReviews')
    .updateOne(
      { name: 'Modern Spacious 1 Bedroom Loft' },
      { $set: { bedrooms: 90 } }
    );
  console.log(result.matchedCount);
  console.log(result.modifiedCount);
  return res.json(result);
};

const getAllCollections = async (req, res, next) => {
  const cursor = await mongodb
    .getDb()
    .db('sample_airbnb')
    .collection('listingsAndReviews')
    .find({
      bedrooms: {
        $gte: 6,
      },
      bathrooms: {
        $gte: 5,
      },
    })
    .sort({ last_review: -1 })
    .limit(3);

  const result = await cursor.toArray();

  // result.forEach((element) => {
  //   console.log(
  //     element.name,
  //     element.bedrooms,
  //     element.bathrooms,
  //     element.last_review
  //   );
  // });
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
};

const getContacts = async (req, res, next) => {
  const cursor = await mongodb
    .getDb()
    .db('contacts')
    .collection('contact1')
    .find();
  const result = await cursor.toArray();
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
};

const getContactById = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db('contacts')
    .collection('contact1')
    .findOne({ _id: ObjectID(req.params.id) });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.json(result);
};

module.exports = {
  getAnotherName,
  getName,
  getMongoData,
  getAllCollections,
  updateDoc,
  getContacts,
  getContactById,
};
