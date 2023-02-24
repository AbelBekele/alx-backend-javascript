/* eslint-disable */
// Huehue *casually disables eslint*
const assert = require('assert').strict;
const calculateNumber = require('./0-calcul');

describe('calculateNumber Test', () => {
  it('test float and int inputs', () => {
    const floatPlusInt = calculateNumber(1, 1.5);
    assert.equal(floatPlusInt, 3);
  });
  it('test two float inputs', () => {
    const floatPlusFloat = calculateNumber(1.5, 1.5);
    assert.equal(floatPlusFloat, 4);
  });
  it('test int and str inputs', () => {
    const intPlusStr = calculateNumber('a', 1);
    assert.equal(intPlusStr, NaN);
  });
  it('test two string inputs', () => {
    const strPlusStr = calculateNumber('a', 'b');
    assert.equal(strPlusStr, NaN);
  });
});
