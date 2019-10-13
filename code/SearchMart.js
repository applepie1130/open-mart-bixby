var http = require('http');
var console = require('console');
var config = require('config');

module.exports.function = function searchMart (name, myLocation) {
  console.log("## Search Mart ##");

  var latitude = myLocation.latitude;
  var longitude = myLocation.longitude;

  console.log("## parameters ##");
  console.log(name);
  console.log(latitude);
  console.log(longitude);

  var options = { 
    format: 'json',
    query: {
      'latitude': latitude,
      'longitude': longitude,
      'martName': name
    }
  };

  // Call API
  var response = http.getUrl(config.get('remote.url') + '/v1/mart/martHolidayInfos', options);  
  return response;
}
