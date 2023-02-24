const { expect } = require('chai');
const request = require('request');

describe('index page test', () => {

  it('Tests non / endpoint', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Tests / endpoint', function (done) {
    request('http://localhost:7865/', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

});
