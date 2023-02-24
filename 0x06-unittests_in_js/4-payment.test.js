/* eslint-disable */
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('test sendPaymentRequestToApi flow', () => {
  const sendPaymentSpy = sinon.spy(sendPaymentRequestToApi);
  const calculateNumberSpy = sinon.stub(Utils, 'calculateNumber');
  const consoleLogSpy = sinon.spy(console, 'log');

  calculateNumberSpy.returns(10);
  const totalAmount = sendPaymentRequestToApi(100, 20);

  it('validate whether the sendPaymentRequestToApi reieved the exact inputs sent', () => {
    expect(sendPaymentSpy.calledWithExactly(100, 20));
  });
  it('validate whether the calculateNumber method received the right inputs', () => {
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20));
  });
  it('validate return value from total sendPaymentRequestToApi', () => {
    expect(totalAmount).to.be.equal(10);
  });
  it('validate whether the console.log executed and printed the right string', () => {
    expect(consoleLogSpy.calledWithExactly('The total is: 10'));
  });
});
