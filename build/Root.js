'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Root;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouterScroll = require('react-router-scroll');

var _reactRouterRedux = require('react-router-redux');

var _routes = require('./render/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Root(_ref) {
  var store = _ref.store;

  return _react2.default.createElement(_reactRouter.Router, {
    history: (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store),
    routes: _routes2.default,
    render: (0, _reactRouter.applyRouterMiddleware)((0, _reactRouterScroll.useScroll)())
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Root, 'Root', '/Users/Joe/Dropbox/Projects/portfolio/src/Root.js');
}();

;