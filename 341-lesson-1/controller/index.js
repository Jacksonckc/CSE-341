const { ObjectID } = require('bson');
const mongodb = require('../db/connection');

const getName = (req, res) => {
  res.send('Talia Chan');
};

const getAnotherName = (req, res) => {
  res.send('Jackson Chan');
};

const getMongoData = async (req, res) => {
  const result = await mongodb.getDb().db('db1').collection('col1').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const updateDoc = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db('sample_airbnb')
    .collection('listingsAndReviews')
    .updateOne({ name: 'Modern Spacious 1 Bedroom Loft' }, { $set: { bedrooms: 90 } });
  console.log(result.matchedCount);
  console.log(result.modifiedCount);
  return res.json(result);
};

const getAllCollections = async (req, res) => {
  const cursor = await mongodb
    .getDb()
    .db('sample_airbnb')
    .collection('listingsAndReviews')
    .find({
      bedrooms: {
        $gte: 6
      },
      bathrooms: {
        $gte: 5
      }
    })
    .sort({ last_review: -1 })
    .limit(3);

  const result = await cursor.toArray();

  res.status(200).json(result);
};

const getContacts = async (req, res) => {
  const cursor = await mongodb.getDb().db('contacts').collection('contact1').find();
  const result = await cursor.toArray();
  res.status(200).json(result);
};

const getContactById = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db('contacts')
    .collection('contact1')
    .findOne({ _id: ObjectID(req.params.id) });
  res.json(result);
};

const createNewContact = async (req, res) => {
  const result = await mongodb.getDb().db('contacts').collection('contact1').insertOne(req.body);
  result ? res.status(201).json(result) : res.status(404);
};

const updateContact = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db('contacts')
    .collection('contact1')
    .updateOne({ _id: ObjectID(req.params.id) }, { $set: req.body });
  result ? res.sendStatus(204) : res.sendStatus(404);
};

const removeContact = async (req, res) => {
  try {
    await mongodb
      .getDb()
      .db('contacts')
      .collection('contact1')
      .deleteOne({ _id: ObjectID(req.params.id) });
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
};

module.exports = {
  getAnotherName,
  getName,
  getMongoData,
  getAllCollections,
  updateDoc,
  getContacts,
  getContactById,
  createNewContact,
  updateContact,
  removeContact
};
