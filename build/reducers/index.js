'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _navVisible = require('./navVisible');

var _navVisible2 = _interopRequireDefault(_navVisible);

var _footerVisible = require('./footerVisible');

var _footerVisible2 = _interopRequireDefault(_footerVisible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  navVisible: _navVisible2.default,
  footerVisible: _footerVisible2.default,
  routing: _reactRouterRedux.routerReducer
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/reducers/index.js');
}();

;