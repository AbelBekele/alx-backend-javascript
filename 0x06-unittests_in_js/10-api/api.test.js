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
  it('Tests whether a valid int id works', function (done) {
    request('http://localhost:7865/cart/20', function (error, response, body) {
      expect(body).to.equal('Payment methods for cart 20');
      expect(response.statusCode).to.equal(200);
      done();
    })
  })
  it('Tests whether an invalid int id works', function (done) {
    request('http://localhost:7865/cart/hello', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    })
  })
  it('Tests whether a missing cart param works', function (done) {
    request('http://localhost:7865/cart/', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    })
  })

});
