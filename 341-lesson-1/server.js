var express = require('express');
var app = express();
app.listen(3000, () => {
  console.log('The server has started!');
});

app.get('/name', (req, res) => {
  res.send('Jackson Chan');
});
