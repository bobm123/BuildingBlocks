var express = require('express');
var app = express();


app.get('/', function(request, response) {
  response.send('OK');
});


app.get('/cities', function(request, response) {
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  response.json(cities);
});


module.exports = app

// some snippets (find a plug in)
/* expr snippet
var express = require('express');
var app = express();

app.listen(3000, function() {
  console.log('listen on 3000')
});
*/

/* new route snippet
app.get('/', function(request, response) {
  //response.send('OK');
});

*/

