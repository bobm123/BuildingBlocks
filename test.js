
// not production so:
//    npm install supertest --save-dev
var request = require('supertest');


// also see mocha -w to watch files and run these test
// whenever:
// ./node_modules/mocha/bin/mocha app.js test.js

var app = require('./app');


describe('Requests to the root path', function() {

  it('Returns a 200 status code', function(done) {

    //uses function chaining to setup a list of test steps
    request(app)
      .get('/')
      .expect(200, done);
/* done); (2nd arg above) is short for this:
      .end(function(error) {
        if(error) throw error;
        done();
      });
*/
  });

});

describe('Listing cities on /cities', function() {

  it('Returns 200 status code', function(done) {
    request(app)
      .get('/cities')
      .expect(200, done);
  });

  it('Returns JSON format', function(done) {
    request(app)
      .get('/cities')
      .expect('Content-Type', /json/, done);
  });

  it('Returns initial cities', function(done) {
    request(app)
      .get('/cities')
      .expect(JSON.stringify(['Lotopia', 'Caspiana', 'Indigo']), done);
  });

});


/* test case template
describe('', function() {

  it('', function(done) {

  });
});
*/
