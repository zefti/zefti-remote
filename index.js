var Request = require('zefti-request');

module.exports = function(options) {
  var dataSource = options.dataSource
  var request = new Request(dataSource);
  return request;
};