'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function About() {
  return _react2.default.createElement(
    'section',
    { className: 'About container' },
    _react2.default.createElement('img', {
      className: 'About__header-img',
      src: '../assets/images/profile_img_small.jpg'
    }),
    _react2.default.createElement(
      'p',
      null,
      'Hi, I\'m Joe. I am an aspiring web developer.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'I started teaching myself to code last year (2015), after developing a passion for it whilst studying at The Open University. I focused on web based technologies, such as: JavaScript, CSS & HTML.'
    ),
    _react2.default.createElement(
      'p',
      { className: 'About__no-margin-p' },
      'I used a variety of online resources including:'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://www.codecademy.com/' },
          'codecademy.com'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://teamtreehouse.com/' },
          'teamtreehouse.com'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://www.codeschool.com/' },
          'codeschool.com'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://www.udemy.com/' },
          'udemy.com (Anthony Alicea\u2019s Understand Node/Angular/JS courses)'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://www.freecodecamp.com/' },
          'freecodecamp.com'
        )
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'My main focus was on Free Code Camp due to their emphasis on project and community based learning. Working on whole projects enabled me to consolidate and implement both, the back-end and front-end skills I have developed to fit the specifications that were given to me. A number of the projects I have built are available ',
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/projects' },
        'here'
      ),
      '.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'I also had the inspiration (whilst working on Free Code Camps Pomodoro project) to build an open source library that makes it simple to create timers in JavaScript. I have been actively adding to and building upon the initial implementation, I\'m happy with the results and the knowledge that I have contributed to the community. The source is ',
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/joesmith100/timrjs', target: '_blank' },
        'here'
      ),
      ' and the interactive readme is ',
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/TimrJS' },
        'here'
      ),
      '.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'This website is built using React, React-Router and Redux, with a Node & Express back-end. It utilises Reacts server rendering to deliver initial page loads and asset files are bundled with Webpack.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'I\u2019m currently looking for work so please get in touch if you\'re interested: ',
      _react2.default.createElement(
        'a',
        { href: 'mailto:joesmith0488@gmail.com', target: '_blank' },
        'Email'
      ),
      ', ',
      _react2.default.createElement(
        'a',
        { href: 'https://uk.linkedin.com/in/joe-smith-42b06749', target: '_blank' },
        'LinkedIn'
      ),
      '.'
    )
  );
}

var _default = About;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(About, 'About', '/Users/Joe/Dropbox/Projects/portfolio/src/components/About.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/components/About.js');
}();

;