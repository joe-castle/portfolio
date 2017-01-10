'use strict';

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;

_routes2.default.listen(port, function () {
  return console.log('Express server listening on port:', port);
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(port, 'port', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/server.js');
}();

;