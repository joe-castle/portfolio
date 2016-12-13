'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = require('react-dom/server');

var _default = function _default(el, state) {
  return '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link href="/assets/bundle.css" rel="stylesheet">\n    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n    <title>Joe Smith - Web Developer</title>\n  </head>\n  <body>\n    <div id="root">' + (0, _server.renderToString)(el) + '</div>\n    <script>\n      window.INITIAL_STATE = ' + JSON.stringify(state) + ';\n    </script>\n    <script src="/assets/bundle.js"></script>\n  </body>\n</html>';
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/render/template.js');
}();

;