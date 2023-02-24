/* eslint-disable */
// Huehue *casually disables eslint*
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber Test', () => {
  describe('Addition Tests', () => {
    it('Test addition with good float and int inputs', () => {
      const floatPlusInt = calculateNumber('SUM', 1, 1.5);
      expect(floatPlusInt).to.equal(3);
    });
    it('Test addition with two good float inputs', () => {
      const floatPlusFloat = calculateNumber('SUM', 1.5, 1.5);
      expect(floatPlusFloat).to.equal(4);
    });
    it('Test addition with bad int and str inputs', () => {
      const intPlusStr = calculateNumber('SUM', 'a', 1);
      expect(intPlusStr).to.be.NaN;
    });
    it('Test addition with two bad string inputs', () => {
      const strPlusStr = calculateNumber('SUM', 'a', 'b');
      expect(strPlusStr).to.be.NaN;
    });
  })

  describe('Subtraction Tests', () => {
    it('Test subtract with good float and int inputs', () => {
      const floatSubInt = calculateNumber('SUBTRACT', 1, 1.5);
      expect(floatSubInt).to.equal(-1);
    });
    it('Test subtract with two good float inputs', () => {
      const floatSubFloat = calculateNumber('SUBTRACT', 1.5, 1.5);
      expect(floatSubFloat).to.equal(0);
    });
    it('Test subtract with bad int and str inputs', () => {
      const intSubStr = calculateNumber('SUBTRACT', 'a', 1);
      expect(intSubStr).to.be.NaN;
    });
    it('Test subtract with two bad string inputs', () => {
      const strSubStr = calculateNumber('SUBTRACT', 'a', 'b');
      expect(strSubStr).to.be.NaN;
    });
  })

  describe('Division Tests', () => {
    it('Test division with good float and int inputs', () => {
      const floatDivInt = calculateNumber('DIVIDE', 1, 1.5);
      expect(floatDivInt).to.equal(0.5);
    });
    it('Test division with two good float inputs', () => {
      const floatDivFloat = calculateNumber('DIVIDE', 1.5, 1.5);
      expect(floatDivFloat).to.equal(1);
    });
    it('Test division with bad int and str inputs', () => {
      const intDivStr = calculateNumber('DIVIDE', 'a', 1);
      expect(intDivStr).to.be.NaN;
    });
    it('Test division with two bad string inputs', () => {
      const strDivStr = calculateNumber('DIVIDE', 'a', 'b');
      expect(strDivStr).to.be.NaN;
    });
  })

  describe('Bad/Missing input parameters', () => {
    it('Missing third parameter', () => {
      const badParams = calculateNumber('DIVIDE', 1);
      expect(badParams).to.be.NaN;
    });
    it('Zero Divison Error', () => {
      expect(calculateNumber('DIVIDE', 10, 0).toLowerCase()).to.eql('error');
    });
    it('Bad TYPE parameter', () => {
      expect(() => calculateNumber('BAD_OPERATION', 10, 2)).to.throw(TypeError);
    });
  })

});
