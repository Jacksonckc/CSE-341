var express = require('express');
var app = express();
app.listen(3000, () => {
  console.log('starts');
});

app.get('/name', (req, res) => {
  res.send('Jackson Chan');
});
