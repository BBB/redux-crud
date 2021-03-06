var _                 = require('lodash');
var common            = require('../common');
var siu               = require('siu');

function success(config, current, records) {
  var reducerName = 'createSuccess';

  records = common(config, current, records, reducerName);

  return siu.a.merge(current, records, config.key);
}

module.exports = success;
