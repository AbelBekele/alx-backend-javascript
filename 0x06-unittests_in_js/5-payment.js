const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const amtPlusShipping = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${amtPlusShipping}`);
  return amtPlusShipping;
};

module.exports = sendPaymentRequestToApi;
