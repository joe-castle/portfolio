'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIXME: Generate a different Nav on tablet + sized to go inside the container and make the picutre clickable: TODO: remove home, add contact links

function Nav(_ref) {
  var navVisible = _ref.navVisible,
      toggleNav = _ref.toggleNav,
      path = _ref.path;

  return _react2.default.createElement(
    'nav',
    { className: (0, _classnames2.default)({
        Nav: true,
        'Nav--visible': navVisible
      }) },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'section',
        { className: 'Nav__links' },
        [['/', 'Home'], ['/projects', 'Projects'], ['/about', 'About']].map(function (link) {
          return _react2.default.createElement(
            _reactRouter.Link,
            {
              key: link[0],
              onClick: toggleNav,
              to: link[0],
              className: (0, _classnames2.default)({
                'Nav__links__link': true,
                'Nav__links__link--active': new RegExp(link[0] === '/' ? '^\\' + link[0] + "$" : '^\\' + link[0]).test(path)
              })
            },
            link[1]
          );
        })
      )
    )
  );
}

var _default = Nav;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Nav, 'Nav', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Nav.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Nav.js');
}();

;