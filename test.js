
// not production so:
//    npm install supertest --save-dev
var request = require('supertest');

var app = require('./app');


describe('Requests to the root path', function() {

  it('Returns a 200 status code', function(done) {

    //uses function chaining to setup a list of test steps
    request(app)
      .get('/')
      .expect(200)
      .end(function(error) {
        if(error) throw error;
        done();
      });

  });

});

