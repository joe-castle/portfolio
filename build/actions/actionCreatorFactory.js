"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(type) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      values[_key2] = arguments[_key2];
    }

    return keys.reduce(function (action, key, index) {
      return _extends({}, action, _defineProperty({}, key, values[index]));
    }, { type: type });
  };
};

/**
 * @description Action Creator Factory
 * Makes action creator functions with provided type and keys.
 *
 * The output from calling the returned function
 * will have the following signature:
 *
 * actionCreator() = {
 *   type: type,
 *   key1: value1,
 *   key2: value2
 *   ...etc
 * }
 *
 * @param {String} type - The action type.
 * @param {Array} keys - All the keys for an action as an array.
 *
 * @return {Function} The action creator function.
 */
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/Joe/Dropbox/Projects/Web/portfolio/src/actions/actionCreatorFactory.js");
}();

;