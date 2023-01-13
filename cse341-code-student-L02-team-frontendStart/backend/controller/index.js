const mongodb = require('../db/connection');

const getProfessionals = async (req, res) => {
  const cursor = await mongodb
    .getDb()
    .db('test')
    .collection('user1')
    .find({ professionalName: 'Jackson Chan' });

  const lists = await cursor.toArray();
  const result = lists[0];
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(result);
};

module.exports = {
  getProfessionals,
};
