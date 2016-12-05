'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavButton(_ref) {
  var navVisible = _ref.navVisible,
      toggleNav = _ref.toggleNav;

  return _react2.default.createElement(
    'button',
    {
      type: 'button',
      onClick: toggleNav,
      className: (0, _classnames2.default)({
        tcon: true,
        'tcon-menu--xcross': true,
        'tcon-transform': navVisible
      }),
      'aria-label': 'toggle menu'
    },
    _react2.default.createElement('span', { className: 'tcon-menu__lines', 'aria-hidden': 'true' }),
    _react2.default.createElement(
      'span',
      { className: 'tcon-visuallyhidden' },
      'toggle menu'
    )
  );
}

var _default = NavButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NavButton, 'NavButton', '/Users/Joe/Dropbox/Projects/portfolio/src/components/NavButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/components/NavButton.js');
}();

;