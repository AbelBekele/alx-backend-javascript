// A simple function that returns the sum of two input params
/* This looks way too neat to be destroyed by eslint */
/* eslint-disable */
const calculateNumber = (type, a, b) => {
    const ops = {'SUM'     : (a, b) => Math.round(a) + Math.round(b),
                 'SUBTRACT': (a, b) => Math.round(a) - Math.round(b),
                 'DIVIDE'  : (a, b) => { if (Math.round(b) !== 0) return Math.round(a) / Math.round(b)
                                         return 'Error'; }};
    return ops[type](a, b);
};
module.exports = calculateNumber;