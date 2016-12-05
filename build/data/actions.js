'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(hash) {
  return {
    exists: function exists(field) {
      return _client2.default.hexistsAsync(hash, field);
    },
    del: function del(field) {
      return _client2.default.hdel(hash, field);
    },
    set: function set(field, value) {
      return _client2.default.hset(hash, field, JSON.stringify(value));
    },
    get: function get(field) {
      return _client2.default.hgetAsync(hash, field).then(JSON.parse);
    },
    getAll: function getAll() {
      return _client2.default.hgetallAsync(hash).then(function (data) {
        return data && Object.keys(data).map(function (x) {
          return JSON.parse(data[x]);
        });
      });
    }
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/data/actions.js');
}();

;