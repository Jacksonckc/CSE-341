const getName = (req, res) => {
  res.send('Talia Chan');
};

const getAnotherName = (req, res) => {
  res.send('Jackson Chan');
};

module.exports = { getAnotherName, getName };
