'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  });

  if (module.hot) {
    module.hot.accept('../reducers', function () {
      return store.replaceReducer(require('../reducers').default);
    });
  }

  return store;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/store/configureStore.js');
}();

;