/* eslint-disable */
const Utils = {
  calculateNumber: (type, a, b) => {
        const ops = {'SUM'     : (a, b) => Math.round(a) + Math.round(b),
                     'SUBTRACT': (a, b) => Math.round(a) - Math.round(b),
                     'DIVIDE'  : (a, b) => { if (Math.round(b) !== 0) return Math.round(a) / Math.round(b)
                                             return 'Error'; }};
        return ops[type](a, b);
    }
}
module.exports = Utils;