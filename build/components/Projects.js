'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactFrameComponent = require('react-frame-component');

var _reactFrameComponent2 = _interopRequireDefault(_reactFrameComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import TimrJS from './TimrJS';
// import SimonGame from './SimonGame';
// import Calculator from './Calculator';
// import TwitchApp from './TwitchApp';
// import QuoteGenerator from './QuoteGenerator';
// import PomodoroTimer from './PomodoroTimer';
// import WeatherWidget from './WeatherWidget';
// import GameOfLife from './GameOfLife';

var personalProjects = [{
  imgUrl: 'timrjs',
  title: 'TimrJS',
  description: 'TimrJS tries to simplify the use of timers by providing a friendly api with a customisable outpout'
}];

var fullStack = [{
  imgUrl: 'pollingvote',
  title: 'The Polling Vote',
  externalLink: 'http://the-polling-vote.herokuapp.com/',
  github: 'https://github.com/joesmith100/the-polling-vote'
}, {
  imgUrl: 'booktraders',
  title: 'Book Traders',
  externalLink: 'http://fcc-books-trading-club2.herokuapp.com/',
  github: 'https://github.com/joesmith100/fcc-book-trading-club'
}, {
  imgUrl: 'nightlife',
  title: 'Nightlife App',
  externalLink: 'http://fcc-nightlife2-app.herokuapp.com/',
  github: 'https://github.com/joesmith100/fcc-nightlife-app'
}];

var frontEnd = [{
  imgUrl: 'gameoflife',
  title: 'Game Of Life'
}, {
  imgUrl: 'simongame',
  title: 'Simon Game'
}, {
  imgUrl: 'pomodorotimer',
  title: 'Pomodoro Timer'
}, {
  imgUrl: 'calculator',
  title: 'Calculator'
}, {
  imgUrl: 'quotegenerator',
  title: 'Quote Generator'
}, {
  imgUrl: 'twitchapp',
  title: 'Twitch App'
}, {
  imgUrl: 'weatherwidget',
  title: 'Weather Widget'
}];

var backEnd = [{
  imgUrl: 'urlshortener',
  title: 'Url Shortener',
  externalLink: 'https://fccurl.herokuapp.com/',
  github: 'https://github.com/joesmith100/fcc-url-shortener'
}, {
  imgUrl: 'imageabstracter',
  title: 'Image Abstracter',
  externalLink: 'https://fcc-image.herokuapp.com/',
  github: 'https://github.com/joesmith100/fcc-image-abstracter'
}];

function Project(_ref) {
  var project = _ref.project,
      personal = _ref.personal;

  return _react2.default.createElement(
    _reactRouter.Link,
    {
      className: 'Projects__project',
      to: !project.externalLink ? '/' + (personal ? '' : 'projects/') + project.title.replace(/\s/g, '') : project.externalLink,
      target: project.externalLink && '_blank'
    },
    _react2.default.createElement(
      'section',
      { className: 'Projects__project__content-wrapper' },
      _react2.default.createElement(
        'section',
        { className: 'Projects__project__live-preview' },
        _react2.default.createElement('img', { src: '../assets/images/projects_' + project.imgUrl + '.png' }),
        !!project.externalLink && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('i', { onClick: function onClick() {
              return window.open(project.github, '_blank');
            } })
        )
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
      'h4',
      null,
      'Full-Stack'
    ),
    _react2.default.createElement(
      'section',
      { className: 'Projects__wrapper' },
      fullStack.map(function (project) {
        return _react2.default.createElement(Project, { key: project.title, project: project });
      })
    ),
    _react2.default.createElement(
      'h4',
      null,
      'Front-End'
    ),
    _react2.default.createElement(
      'section',
      { className: 'Projects__wrapper' },
      frontEnd.map(function (project) {
        return _react2.default.createElement(Project, { key: project.title, project: project });
      })
    ),
    _react2.default.createElement(
      'h4',
      null,
      'Back-End'
    ),
    _react2.default.createElement(
      'section',
      { className: 'Projects__wrapper' },
      backEnd.map(function (project) {
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

  __REACT_HOT_LOADER__.register(fullStack, 'fullStack', '/Users/Joe/Dropbox/Projects/portfolio/src/components/Projects.js');

  __REACT_HOT_LOADER__.register(frontEnd, 'frontEnd', '/Users/Joe/Dropbox/Projects/portfolio/src/components/Projects.js');

  __REACT_HOT_LOADER__.register(backEnd, 'backEnd', '/Users/Joe/Dropbox/Projects/portfolio/src/components/Projects.js');

  __REACT_HOT_LOADER__.register(Project, 'Project', '/Users/Joe/Dropbox/Projects/portfolio/src/components/Projects.js');

  __REACT_HOT_LOADER__.register(Projects, 'Projects', '/Users/Joe/Dropbox/Projects/portfolio/src/components/Projects.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/components/Projects.js');
}();

;