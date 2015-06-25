var Request = require('zefti-request');

module.exports = function(options) {
  var request = new Request(options);
  return request;
};