'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Button(props) {
  var _classNames;

  return _react2.default.createElement(
    'button',
    _extends({}, props, {
      className: (0, _classnames2.default)((_classNames = {
        Button: true,
        'Button--active': props.active
      }, _defineProperty(_classNames, 'Button--' + props.color, props.color), _defineProperty(_classNames, 'Button--all-' + props.color, props.all), _defineProperty(_classNames, props.className, props.className), _classNames))

    }),
    props.children
  );
}

var _default = Button;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Button, 'Button', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Button.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Button.js');
}();

;