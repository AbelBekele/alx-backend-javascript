/* eslint-disable */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', (done) => {
  it('tests an async resolve', () => getPaymentTokenFromAPI(true)
    .then((success) => {
      expect(success).to.eql({ data: 'Successful response from the API' });
    }));
});
