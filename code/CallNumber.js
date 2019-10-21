var console = require('console');

module.exports.function = function callNumber (telNo) {

  console.log('## Call TelNo ##');
  console.log(telNo);

  let result = telNo;

  return result;
}