'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactFrameComponent = require('react-frame-component');

var _reactFrameComponent2 = _interopRequireDefault(_reactFrameComponent);

var _TimrJS = require('./TimrJS');

var _TimrJS2 = _interopRequireDefault(_TimrJS);

var _SimonGame = require('./SimonGame');

var _SimonGame2 = _interopRequireDefault(_SimonGame);

var _Calculator = require('./Calculator');

var _Calculator2 = _interopRequireDefault(_Calculator);

var _TwitchApp = require('./TwitchApp');

var _TwitchApp2 = _interopRequireDefault(_TwitchApp);

var _QuoteGenerator = require('./QuoteGenerator');

var _QuoteGenerator2 = _interopRequireDefault(_QuoteGenerator);

var _PomodoroTimer = require('./PomodoroTimer');

var _PomodoroTimer2 = _interopRequireDefault(_PomodoroTimer);

var _WeatherWidget = require('./WeatherWidget');

var _WeatherWidget2 = _interopRequireDefault(_WeatherWidget);

var _GameOfLife = require('./GameOfLife');

var _GameOfLife2 = _interopRequireDefault(_GameOfLife);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var personalProjects = [{
  livePreview: _TimrJS2.default,
  title: 'TimrJS'
}];

var fccProjects = [{
  livePreview: _GameOfLife2.default,
  title: 'Game Of Life'
}, {
  livePreview: _SimonGame2.default,
  title: 'Simon Game'
}, {
  livePreview: _PomodoroTimer2.default,
  title: 'Pomodoro Timer'
}, {
  livePreview: _Calculator2.default,
  title: 'Calculator'
}, {
  livePreview: _QuoteGenerator2.default,
  title: 'Quote Generator'
}, {
  livePreview: _TwitchApp2.default,
  title: 'Twitch App'
}, {
  livePreview: _WeatherWidget2.default,
  title: 'Weather Widget'
}];

function Project(_ref) {
  var project = _ref.project,
      personal = _ref.personal;

  return _react2.default.createElement(
    _reactRouter.Link,
    {
      className: 'Projects__project',
      to: '/' + (personal ? '' : 'projects/') + project.title.replace(/\s/g, '')
    },
    _react2.default.createElement(
      'section',
      { className: 'Projects__project__content-wrapper' },
      _react2.default.createElement(
        'section',
        { className: 'Projects__project__live-preview' },
        _react2.default.createElement(
          _reactFrameComponent2.default,
          {
            id: 'test',
            frameBorder: 0,
            scrolling: 'no',
            initialContent: '<!DOCTYPE html><html><head>\n              <link href="/assets/bundle.css" rel="stylesheet">\n              </head><body><div></div></body></html>'
          },
          _react2.default.createElement(project.livePreview, { livePreview: true })
        ),
        _react2.default.createElement('section', null)
      ),
      _react2.default.createElement(
        'section',
        { className: 'Projects__project__title-wrapper' },
        _react2.default.createElement(
          'span',
          { className: 'Projects__project__title-wrapper__title' },
          project.title
        )
      )
    )
  );
}

function Projects(_ref2) {
  var children = _ref2.children;

  return _react2.default.createElement(
    'section',
    { className: 'Projects container' },
    _react2.default.createElement(
      'section',
      { className: 'Projects__wrapper' },
      personalProjects.map(function (project) {
        return _react2.default.createElement(Project, { key: project.title, project: project, personal: true });
      })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Free Code Camp'
    ),
    _react2.default.createElement(
      'p',
      null,
      'The following are just some of the projects that were built as part of the',
      _react2.default.createElement(
        'a',
        { href: 'http://www.freecodecamp.com', target: '_blank' },
        ' freeCodeCamp.com '
      ),
      'curriculum.'
    ),
    _react2.default.createElement(
      'section',
      { className: 'Projects__wrapper' },
      fccProjects.map(function (project) {
        return _react2.default.createElement(Project, { key: project.title, project: project });
      })
    )
  );
}

var _default = Projects;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(personalProjects, 'personalProjects', '/Users/Joe/Dropbox/Projects/portfolio/src/components/Projects.js');

  __REACT_HOT_LOADER__.register(fccProjects, 'fccProjects', '/Users/Joe/Dropbox/Projects/portfolio/src/components/Projects.js');

  __REACT_HOT_LOADER__.register(Project, 'Project', '/Users/Joe/Dropbox/Projects/portfolio/src/components/Projects.js');

  __REACT_HOT_LOADER__.register(Projects, 'Projects', '/Users/Joe/Dropbox/Projects/portfolio/src/components/Projects.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/components/Projects.js');
}();

;