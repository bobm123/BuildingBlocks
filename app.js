var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('OK');
  //throw 'Error'
});

//app.listen(3000);

module.exports = app
