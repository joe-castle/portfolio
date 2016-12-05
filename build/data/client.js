'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _bluebird.promisifyAll)(_redis2.default.RedisClient.prototype);

// If there is no REDISTOGO_URL, defaults to localhost, port 6379.
var client = _redis2.default.createClient(process.env.REDISTOGO_URL).on('error', console.log);

if (process.env.NODE_ENV === 'test') {
  client.select(1);
}

var _default = client;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(client, 'client', '/Users/Joe/Dropbox/Projects/portfolio/src/data/client.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/data/client.js');
}();

;