var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.send('OK');
});

app.get('/cities', function(request, response) {
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  response.json(cities);
});


// defined a new file ./bin/www that has the port listen 3000
// so to run the local webserver, ./bin/www instead of
// npm app.js, this also lets test.js call the app as a module
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

