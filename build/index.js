'use strict';

require('./assets/stylus/main.styl');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactHotLoader = require('react-hot-loader');

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _Root = require('./Root');

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)(window.INITIAL_STATE);

_reactDom2.default.render(_react2.default.createElement(
  _reactHotLoader.AppContainer,
  null,
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_Root2.default, { store: store })
  )
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./Root', function () {
    var NewRoot = require('./Root').default;

    _reactDom2.default.render(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(NewRoot, { store: store })
      )
    ), document.getElementById('root'));
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(store, 'store', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/index.js');
}();

;