'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var links = {
  Github: 'https://github.com/joesmith100',
  Codepen: 'http://codepen.io/joesmith/',
  FCC: 'https://www.freecodecamp.com/joesmith100',
  Linkedin: 'https://uk.linkedin.com/in/joe-smith-42b06749',
  Email: 'mailto:joesmith0488@gmail.com'
};

function Footer(_ref) {
  var footerVisible = _ref.footerVisible,
      contentActive = _ref.contentActive;

  return _react2.default.createElement(
    'footer',
    { className: (0, _classnames2.default)({
        'Footer': true,
        'Footer--content-active': contentActive
      }) },
    _react2.default.createElement(
      'section',
      { className: (0, _classnames2.default)({
          'container': true,
          'Footer__wrapper': true,
          'Footer__wrapper--visible': footerVisible || contentActive
        }) },
      Object.keys(links).map(function (link) {
        return _react2.default.createElement(
          'a',
          { key: link, href: links[link], target: '_blank' },
          _react2.default.createElement('i', { className: 'Footer__wrapper__icon Footer__wrapper__icon--' + link })
        );
      }),
      _react2.default.createElement(
        'secion',
        { className: 'Footer__wrapper__copyright' },
        '\xA9 2016 Joe Smith'
      )
    )
  );
}

var _default = Footer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(links, 'links', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Footer.js');

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Footer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Footer.js');
}();

;