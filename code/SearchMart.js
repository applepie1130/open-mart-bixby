var http = require('http');
var console = require('console');
var config = require('config');

module.exports.function = function searchMart (name, myLocation, $vivContext) {
  console.log('## Search Mart ##');

  var latitude = myLocation.latitude;
  var longitude = myLocation.longitude;
  var isHandsfree = $vivContext.handsFree; 

  console.log('## parameters ##');  
  console.log(name);
  console.log(latitude);
  console.log(longitude);
  console.log(isHandsfree)

  var options = { 
    format: 'json',
    query: {
      'latitude': latitude,
      'longitude': longitude,
      'martName': name,
      'isHandsfree': isHandsfree
    }
  };

  // Call API
  var response = http.getUrl(config.get('remote.url') + '/v1/mart/martHolidayInfos', options);

  console.log('## API Response ##');
  console.log(response)

  return response;
}
