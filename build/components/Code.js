'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Code(_ref) {
  var lang = _ref.lang,
      children = _ref.children;

  return _react2.default.createElement(
    'pre',
    { className: 'Code Code--lang-' + lang },
    _react2.default.createElement(
      'code',
      null,
      children
    )
  );
}

Code.defaultProps = { lang: 'js' };

var _default = Code;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Code, 'Code', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Code.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Code.js');
}();

;