'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = require('react-redux');

var _actionCreators = require('../actions/actionCreators');

var actions = _interopRequireWildcard(_actionCreators);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavButton = require('./NavButton');

var _NavButton2 = _interopRequireDefault(_NavButton);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var children = _ref.children,
      location = _ref.location,
      navVisible = _ref.navVisible,
      footerVisible = _ref.footerVisible,
      toggleNav = _ref.toggleNav,
      makeFooterVisible = _ref.makeFooterVisible;

  var contentActive = !/^\/$/i.test(location.pathname);
  var fullPage = /^\/projects/i.test(location.pathname) || /^\/about/i.test(location.pathname) || !contentActive ? false : true;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)({
        'App': true,
        'App--content-active': contentActive
      }) },
    fullPage || _react2.default.createElement(_Nav2.default, {
      navVisible: navVisible,
      toggleNav: toggleNav,
      path: location.pathname
    }),
    fullPage || _react2.default.createElement(_NavButton2.default, {
      navVisible: navVisible,
      toggleNav: toggleNav
    }),
    fullPage || _react2.default.createElement(_Header2.default, {
      makeFooterVisible: makeFooterVisible,
      contentActive: contentActive,
      path: location.pathname
    }),
    _react2.default.createElement(
      'main',
      null,
      children
    ),
    _react2.default.createElement(_Footer2.default, {
      footerVisible: footerVisible,
      contentActive: contentActive
    })
  );
}

var _default = (0, _reactRedux.connect)(function (_ref2) {
  var navVisible = _ref2.navVisible,
      footerVisible = _ref2.footerVisible;
  return {
    navVisible: navVisible,
    footerVisible: footerVisible
  };
}, actions)(App);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/Joe/Dropbox/Projects/portfolio/src/components/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/components/App.js');
}();

;