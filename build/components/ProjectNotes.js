'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFrameComponent = require('react-frame-component');

var _reactFrameComponent2 = _interopRequireDefault(_reactFrameComponent);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Code = require('./Code');

var _Code2 = _interopRequireDefault(_Code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectNotes = function (_React$Component) {
  _inherits(ProjectNotes, _React$Component);

  function ProjectNotes(props) {
    _classCallCheck(this, ProjectNotes);

    var _this = _possibleConstructorReturn(this, (ProjectNotes.__proto__ || Object.getPrototypeOf(ProjectNotes)).call(this, props));

    _this.state = {
      gist: _this.props.js
    };
    return _this;
  }

  _createClass(ProjectNotes, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'section',
        { className: 'ProjectNotes container' },
        _react2.default.createElement(
          'a',
          { href: this.props.titleLink, target: '_blank' },
          _react2.default.createElement(
            'h1',
            { className: 'ProjectNotes__title' },
            this.props.title
          )
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Objective'
        ),
        _react2.default.createElement(
          'p',
          null,
          this.props.objective,
          _react2.default.createElement(
            'a',
            { href: this.props.objectiveLink, target: '_blank' },
            'this.'
          )
        ),
        _react2.default.createElement(
          'h3',
          null,
          'User Stories'
        ),
        _react2.default.createElement(
          'ul',
          null,
          this.props.userStories.map(function (userStory) {
            return _react2.default.createElement(
              'li',
              { key: userStory },
              userStory
            );
          })
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Code'
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            onClick: function onClick() {
              _this2.setState({ gist: _this2.props.js });
            },
            active: this.state.gist === this.props.js,
            style: {
              margin: '0 5px 10px 9px'
            }
          },
          'JavaScript'
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            onClick: function onClick() {
              _this2.setState({ gist: _this2.props.css });
            },
            active: this.state.gist === this.props.css
          },
          'Stylus'
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(_reactFrameComponent2.default, {
            height: '500',
            frameBorder: 'no',
            allowTransparency: 'true',
            allowFullScreen: 'true',
            style: {
              width: '100%',
              display: this.state.gist === this.props.js ? 'block' : 'none'
            },
            initialContent: '\n              <body><script src="https://gist.github.com/joesmith100/' + this.props.js + '.js">\n              </script></body>\n              '
          }),
          _react2.default.createElement(_reactFrameComponent2.default, {
            height: '500',
            frameBorder: 'no',
            allowTransparency: 'true',
            allowFullScreen: 'true',
            style: {
              width: '100%',
              display: this.state.gist === this.props.css ? 'block' : 'none'
            },
            initialContent: '\n              <body><script src="https://gist.github.com/joesmith100/' + this.props.css + '.js">\n              </script></body>\n              '
          })
        )
      );
    }
  }]);

  return ProjectNotes;
}(_react2.default.Component);

function ProjectNotes(_ref) {
  var title = _ref.title,
      titleLink = _ref.titleLink,
      objective = _ref.objective,
      objectiveLink = _ref.objectiveLink,
      userStories = _ref.userStories,
      js = _ref.js,
      css = _ref.css;

  return _react2.default.createElement(
    'section',
    { className: 'ProjectNotes container' },
    _react2.default.createElement(
      'a',
      { href: this.props.titleLink, target: '_blank' },
      _react2.default.createElement(
        'h1',
        { className: 'ProjectNotes__title' },
        this.props.title
      )
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Objective'
    ),
    _react2.default.createElement(
      'p',
      null,
      this.props.objective,
      _react2.default.createElement(
        'a',
        { href: this.props.objectiveLink, target: '_blank' },
        'this.'
      )
    ),
    _react2.default.createElement(
      'h3',
      null,
      'User Stories'
    ),
    _react2.default.createElement(
      'ul',
      null,
      this.props.userStories.map(function (userStory) {
        return _react2.default.createElement(
          'li',
          { key: userStory },
          userStory
        );
      })
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Code'
    ),
    _react2.default.createElement(_reactFrameComponent2.default, {
      height: '500',
      frameBorder: 'no',
      allowTransparency: 'true',
      allowFullScreen: 'true',
      style: { width: '100%' },
      initialContent: '\n          <body><script src="https://gist.github.com/joesmith100/' + this.state.gist + '.js"></script></body>\n        '
    })
  );
}

var _default = ProjectNotes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProjectNotes, 'ProjectNotes', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/ProjectNotes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/ProjectNotes.js');
}();

;