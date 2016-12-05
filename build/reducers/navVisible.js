'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navVisble;

var _actionTypes = require('../actions/actionTypes');

function navVisble() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var _ref = arguments[1];
  var type = _ref.type;

  switch (type) {
    case _actionTypes.TOGGLE_NAV:
      return !state;

    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(navVisble, 'navVisble', '/Users/Joe/Dropbox/Projects/portfolio/src/reducers/navVisible.js');
}();

;