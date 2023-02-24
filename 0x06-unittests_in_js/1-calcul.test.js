/* eslint-disable */
// Huehue *casually disables eslint*
const assert = require('assert').strict;
const calculateNumber = require('./1-calcul');

describe('calculateNumber Test', () => {
  describe('Addition Tests', () => {
    it('Test addition with good float and int inputs', () => {
      const floatPlusInt = calculateNumber('SUM', 1, 1.5);
      assert.equal(floatPlusInt, 3);
    });
    it('Test addition with two good float inputs', () => {
      const floatPlusFloat = calculateNumber('SUM', 1.5, 1.5);
      assert.equal(floatPlusFloat, 4);
    });
    it('Test addition with bad int and str inputs', () => {
      const intPlusStr = calculateNumber('SUM', 'a', 1);
      assert.equal(intPlusStr, NaN);
    });
    it('Test addition with two bad string inputs', () => {
      const strPlusStr = calculateNumber('SUM', 'a', 'b');
      assert.equal(strPlusStr, NaN);
    });
  })

  describe('Subtraction Tests', () => {
    it('Test subtract with good float and int inputs', () => {
      const floatSubInt = calculateNumber('SUBTRACT', 1, 1.5);
      assert.equal(floatSubInt, -1);
    });
    it('Test subtract with two good float inputs', () => {
      const floatSubFloat = calculateNumber('SUBTRACT', 1.5, 1.5);
      assert.equal(floatSubFloat, 0);
    });
    it('Test subtract with bad int and str inputs', () => {
      const intSubStr = calculateNumber('SUBTRACT', 'a', 1);
      assert.equal(intSubStr, NaN);
    });
    it('Test subtract with two bad string inputs', () => {
      const strSubStr = calculateNumber('SUBTRACT', 'a', 'b');
      assert.equal(strSubStr, NaN);
    });
  })

  describe('Division Tests', () => {
    it('Test division with good float and int inputs', () => {
      const floatDivInt = calculateNumber('DIVIDE', 1, 1.5);
      assert.equal(floatDivInt, 0.5);
    });
    it('Test division with two good float inputs', () => {
      const floatDivFloat = calculateNumber('DIVIDE', 1.5, 1.5);
      assert.equal(floatDivFloat, 1);
    });
    it('Test division with bad int and str inputs', () => {
      const intDivStr = calculateNumber('DIVIDE', 'a', 1);
      assert.equal(intDivStr, NaN);
    });
    it('Test division with two bad string inputs', () => {
      const strDivStr = calculateNumber('DIVIDE', 'a', 'b');
      assert.equal(strDivStr, NaN);
    });
  })

  describe('Bad/Missing input parameters', () => {
    it('Missing third parameter', () => {
      const badParams = calculateNumber('DIVIDE', 1);
      assert.equal(badParams, NaN);
    });
    it('Zero Divison Error', () => {
      assert.equal(calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
    });
    it('Bad TYPE parameter', () => {
      assert.throws(() => calculateNumber('BAD_OPERATION', 10, 2), TypeError);
    });
  })

});
