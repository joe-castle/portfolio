'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTypewriter = require('react-typewriter');

var _reactTypewriter2 = _interopRequireDefault(_reactTypewriter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(_ref) {
  var makeFooterVisible = _ref.makeFooterVisible,
      contentActive = _ref.contentActive,
      path = _ref.path;

  return _react2.default.createElement(
    'header',
    { className: (0, _classnames2.default)({
        'Header': true,
        'Header--content-active': contentActive
      }) },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/' },
        _react2.default.createElement('img', { className: 'Header__img', src: '../assets/images/profile_img_small.jpg' })
      ),
      // Typed text only on home page
      contentActive || _react2.default.createElement(
        _reactTypewriter2.default,
        { typing: 1, onTypingEnd: makeFooterVisible },
        _react2.default.createElement(
          'h1',
          { className: 'Header__title' },
          'Hi, I\'m Joe. I am a web developer.'
        )
      )
    )
  );
}

var _default = Header;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Header.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Header.js');
}();

;