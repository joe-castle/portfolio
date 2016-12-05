'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _timrjs = require('timrjs');

var _timrjs2 = _interopRequireDefault(_timrjs);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ProjectNotes = require('./ProjectNotes');

var _ProjectNotes2 = _interopRequireDefault(_ProjectNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function RangeInput(_ref) {
  var time = _ref.time,
      changeFn = _ref.changeFn,
      session = _ref.session;

  return _react2.default.createElement(
    'section',
    { className: 'PomodoroTimer__input PomodoroTimer__input--' + session },
    _react2.default.createElement(
      'section',
      { className: 'PomodoroTimer__input__wrapper' },
      _react2.default.createElement(
        'label',
        { htmlFor: session + '-label' },
        _react2.default.createElement(
          'span',
          { className: 'session-name' },
          '' + session
        ),
        _react2.default.createElement(
          'span',
          { className: 'time' },
          _timrjs2.default.formatTime(_timrjs2.default.validate(time + 'm'))
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          onChange: function onChange(ev) {
            return changeFn(ev.target.value);
          },
          value: time,
          type: 'range', min: '1', max: '120',
          name: session + '-label'
        })
      )
    )
  );
}

var PomodoroTimer = function (_React$Component) {
  _inherits(PomodoroTimer, _React$Component);

  function PomodoroTimer() {
    _classCallCheck(this, PomodoroTimer);

    var _this = _possibleConstructorReturn(this, (PomodoroTimer.__proto__ || Object.getPrototypeOf(PomodoroTimer)).call(this));

    _this.changeSessionLength = function () {
      return _this.__changeSessionLength__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.changeBreakLength = function () {
      return _this.__changeBreakLength__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      sessionTime: 25,
      breakTime: 5,
      time: '25:00',
      session: 'session',
      fillHeight: 0,
      finish: false,
      running: false
    };
    return _this;
  }

  _createClass(PomodoroTimer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.buzzer = new Audio('http://cpres.herokuapp.com/pomodoro-timer/egg-timer.wav');

      this.timer = (0, _timrjs2.default)(this.state.sessionTime + 'm').ticker(function (ft, pd) {
        _this2.setState({ time: ft, fillHeight: pd });
      }).finish(function (self) {
        _this2.setState({ finish: 'finish' });

        _this2.buzzer.play();

        // Timeout to give finish animation enough time to run.
        setTimeout(function () {
          var session = _this2.state.session === 'session' ? 'break' : 'session';

          _this2.setState({
            session: session,
            time: self.setStartTime(_this2.state[session + 'Time'] + 'm'),
            fillHeight: 0,
            finish: false
          });

          self.start();
        }, 3000);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.timer.destroy();
    }

    // Changing session length also resets timer

  }, {
    key: '__changeSessionLength__REACT_HOT_LOADER__',
    value: function __changeSessionLength__REACT_HOT_LOADER__(val) {
      if (!this.state.running) {
        this.setState({
          session: 'session',
          sessionTime: val,
          running: false,
          fillHeight: 0,
          time: this.timer.setStartTime(val + 'm')
        });
      }
    }
  }, {
    key: '__changeBreakLength__REACT_HOT_LOADER__',
    value: function __changeBreakLength__REACT_HOT_LOADER__(val) {
      this.setState({ breakTime: val });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          session = _state.session,
          finish = _state.finish,
          sessionTime = _state.sessionTime,
          breakTime = _state.breakTime,
          fillHeight = _state.fillHeight,
          time = _state.time,
          running = _state.running;


      return _react2.default.createElement(
        'section',
        { className: 'PomodoroTimer__wrapper' },
        _react2.default.createElement(
          'section',
          { className: 'PomodoroTimer' },
          _react2.default.createElement(
            'section',
            {
              className: 'PomodoroTimer__timer PomodoroTimer__timer--' + session,
              onClick: function onClick() {
                !running && !finish ? _this3.timer.start() : _this3.timer.pause();

                _this3.setState({ running: !running });
              } },
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)({
                'PomodoroTimer__timer__fill': true,
                'PomodoroTimer__timer__fill--finish': finish
              }),
              style: { height: fillHeight + '%' }
            }),
            _react2.default.createElement(
              'span',
              { className: 'PomodoroTimer__timer__cta material-icons' },
              running ? 'pause' : 'play_arrow'
            ),
            _react2.default.createElement(
              'span',
              { className: 'PomodoroTimer__timer__time' },
              time
            )
          ),
          _react2.default.createElement(RangeInput, {
            time: sessionTime,
            changeFn: this.changeSessionLength,
            session: 'session'
          }),
          _react2.default.createElement(RangeInput, {
            time: breakTime,
            changeFn: this.changeBreakLength,
            session: 'break'
          })
        ),
        _react2.default.createElement(_ProjectNotes2.default, {
          title: 'Pomodoro Timer',
          js: 'cb3a0322449ebe2d0f6dfa07842147b8',
          css: 'f8e14138ac1625b8a11979642d3e69a9',
          titleLink: 'https://www.freecodecamp.com/challenges/build-a-pomodoro-clock',
          objective: 'Build a working Pomodoro timer. It should be functionally similar to: ',
          objectiveLink: 'https://codepen.io/FreeCodeCamp/full/aNyxXR/',
          userStories: ['I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.', 'I can reset the clock for my next pomodoro.', 'I can customize the length of each pomodoro.']
        })
      );
    }
  }]);

  return PomodoroTimer;
}(_react2.default.Component);

var _default = PomodoroTimer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RangeInput, 'RangeInput', '/Users/Joe/Dropbox/Projects/portfolio/src/components/PomodoroTimer.js');

  __REACT_HOT_LOADER__.register(PomodoroTimer, 'PomodoroTimer', '/Users/Joe/Dropbox/Projects/portfolio/src/components/PomodoroTimer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/components/PomodoroTimer.js');
}();

;