var console = require('console');

module.exports.function = function openMap (address) {

  console.log('## Open Map address ##');
  console.log(address);

  let result = 'https://m.map.naver.com/search2/search.nhn?query=' + address + '&sm=hty&style=v4';

  return result;
} 