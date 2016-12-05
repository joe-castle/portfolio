'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFooterVisible = exports.toggleNav = undefined;

var _actionTypes = require('./actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

var _actionCreatorFactory = require('./actionCreatorFactory');

var _actionCreatorFactory2 = _interopRequireDefault(_actionCreatorFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var toggleNav = exports.toggleNav = (0, _actionCreatorFactory2.default)(actionTypes.TOGGLE_NAV);
var makeFooterVisible = exports.makeFooterVisible = (0, _actionCreatorFactory2.default)(actionTypes.MAKE_FOOTER_VISIBLE);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toggleNav, 'toggleNav', '/Users/Joe/Dropbox/Projects/portfolio/src/actions/actionCreators.js');

  __REACT_HOT_LOADER__.register(makeFooterVisible, 'makeFooterVisible', '/Users/Joe/Dropbox/Projects/portfolio/src/actions/actionCreators.js');
}();

;