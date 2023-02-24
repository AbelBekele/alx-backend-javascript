/* eslint-disable */
const { spy } = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('test sendPaymentRequestToApi flow', () => {
  let calculateNumberSpy;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberSpy = spy(Utils, 'calculateNumber');
    consoleLogSpy = spy(console, 'log');
  })
  afterEach(() => {
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  })

  it('Validate hook test v1 (100, 20) => {}', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledWithExactly('The total is: 120'));
    expect(consoleLogSpy.calledOnce);
  })
  it('Validate hook test v2 (10, 10) => {}', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledWithExactly('The total is: 20'));
    expect(consoleLogSpy.calledOnce);
  })
});
