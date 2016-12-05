'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _Projects = require('../components/Projects');

var _Projects2 = _interopRequireDefault(_Projects);

var _About = require('../components/About');

var _About2 = _interopRequireDefault(_About);

var _TimrJS = require('../components/TimrJS');

var _TimrJS2 = _interopRequireDefault(_TimrJS);

var _SimonGame = require('../components/SimonGame');

var _SimonGame2 = _interopRequireDefault(_SimonGame);

var _TwitchApp = require('../components/TwitchApp');

var _TwitchApp2 = _interopRequireDefault(_TwitchApp);

var _Calculator = require('../components/Calculator');

var _Calculator2 = _interopRequireDefault(_Calculator);

var _QuoteGenerator = require('../components/QuoteGenerator');

var _QuoteGenerator2 = _interopRequireDefault(_QuoteGenerator);

var _PomodoroTimer = require('../components/PomodoroTimer');

var _PomodoroTimer2 = _interopRequireDefault(_PomodoroTimer);

var _WeatherWidget = require('../components/WeatherWidget');

var _WeatherWidget2 = _interopRequireDefault(_WeatherWidget);

var _GameOfLife = require('../components/GameOfLife');

var _GameOfLife2 = _interopRequireDefault(_GameOfLife);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Projects
var _default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: 'projects', component: _Projects2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _About2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'TimrJS', component: _TimrJS2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'projects/SimonGame', component: _SimonGame2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'projects/TwitchApp', component: _TwitchApp2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'projects/Calculator', component: _Calculator2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'projects/QuoteGenerator', component: _QuoteGenerator2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'projects/PomodoroTimer', component: _PomodoroTimer2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'projects/WeatherWidget', component: _WeatherWidget2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'projects/GameOfLife', component: _GameOfLife2.default })
);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/render/routes.js');
}();

;