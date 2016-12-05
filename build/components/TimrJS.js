'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _timrjs = require('timrjs');

var _timrjs2 = _interopRequireDefault(_timrjs);

var _reactRouter = require('react-router');

var _Code = require('./Code');

var _Code2 = _interopRequireDefault(_Code);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartExample = function (_React$Component) {
  _inherits(StartExample, _React$Component);

  function StartExample() {
    _classCallCheck(this, StartExample);

    var _this = _possibleConstructorReturn(this, (StartExample.__proto__ || Object.getPrototypeOf(StartExample)).call(this));

    _this.handleChange = function () {
      return _this.__handleChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      output: '10:00',
      error: ''
    };
    return _this;
  }

  _createClass(StartExample, [{
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(ev) {
      try {
        this.setState({
          output: (0, _timrjs2.default)(ev.target.value).formatTime(),
          error: ''
        });
      } catch (e) {
        this.setState({ error: e.toString() });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'TimrJS__start-example' },
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__start-example__notes' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                '\'10:00\''
              ),
              ' - Time units must be separated by a colon.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                '600'
              ),
              ' - Equivalent to 10:00.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                '\'50\''
              ),
              ' - Unless a string contains a colon, a number is treated as seconds'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                '\'25m\''
              ),
              ' - Shorthand for 25:00.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                '\'25h\''
              ),
              ' - Shorthand for 25:00:00.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                '0'
              ),
              ' - Sets up a stopwatch rather than a coutdown.'
            )
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'If the provided startTime is invalid an error will be thrown. Times up to 999:59:59 are supported.'
        ),
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__start-example__interactive' },
          _react2.default.createElement(
            _Code2.default,
            null,
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'Timr'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement('input', {
              onChange: this.handleChange,
              defaultValue: '10:00'
            }),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// Formatted Output: '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.output
            ),
            '\n'
          ),
          this.state.error && _react2.default.createElement(
            'div',
            { className: 'TimrJS__start-example__interactive__error' },
            this.state.error
          )
        )
      );
    }
  }]);

  return StartExample;
}(_react2.default.Component);

// FIXME: default value doesn't work properly when changing options.


var OptionsExample = function (_React$Component2) {
  _inherits(OptionsExample, _React$Component2);

  function OptionsExample(props) {
    _classCallCheck(this, OptionsExample);

    var _this2 = _possibleConstructorReturn(this, (OptionsExample.__proto__ || Object.getPrototypeOf(OptionsExample)).call(this, props));

    _this2.updateOutput = function () {
      return _this2.__updateOutput__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this2.getDefaultOption = function () {
      return _this2.__getDefaultOption__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this2.getDefaultOptionValue = function () {
      return _this2.__getDefaultOptionValue__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this2.generateOptionValues = function () {
      return _this2.__generateOptionValues__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this2.state = {
      hourOutput: '02:00:00',
      minuteOutput: '20:00',
      secondOutput: '00:20',
      error: ''
    };
    return _this2;
  }

  _createClass(OptionsExample, [{
    key: '__updateOutput__REACT_HOT_LOADER__',
    value: function __updateOutput__REACT_HOT_LOADER__(option, optionValue) {
      this.setState({
        hourOutput: (0, _timrjs2.default)('02:00:00', _defineProperty({}, option, optionValue)).formatTime(),
        minuteOutput: (0, _timrjs2.default)('20:00', _defineProperty({}, option, optionValue)).formatTime(),
        secondOutput: (0, _timrjs2.default)('20', _defineProperty({}, option, optionValue)).formatTime(),
        error: ''
      });
    }
  }, {
    key: '__getDefaultOption__REACT_HOT_LOADER__',
    value: function __getDefaultOption__REACT_HOT_LOADER__() {
      return this.refs.option ? this.refs.option.value : 'outputFormat';
    }
  }, {
    key: '__getDefaultOptionValue__REACT_HOT_LOADER__',
    value: function __getDefaultOptionValue__REACT_HOT_LOADER__(option) {
      switch (option) {
        case 'outputFormat':
          return 'mm:ss';
        case 'formatType':
          return 'h';
        case 'separator':
          return ':';
      }
    }
  }, {
    key: '__generateOptionValues__REACT_HOT_LOADER__',
    value: function __generateOptionValues__REACT_HOT_LOADER__() {
      var _this3 = this;

      var defaultOption = this.getDefaultOption();

      if (defaultOption === 'separator') {
        return _react2.default.createElement('input', {
          ref: 'optionValue',
          onChange: function onChange(ev) {
            return _this3.updateOutput(_this3.refs.option.value, ev.target.value);
          },
          defaultValue: ':'
        });
      }

      return _react2.default.createElement(
        'select',
        {
          ref: 'optionValue',
          onChange: function onChange(ev) {
            return _this3.updateOutput(_this3.refs.option.value, ev.target.value);
          },
          defaultValue: this.getDefaultOptionValue(this.getDefaultOption())
        },
        [{ outputFormat: ['hh:mm:ss', 'mm:ss', 'ss'] }, { formatType: ['h', 'm', 's'] }, { separator: [':', '-', '/'] }].filter(function (option) {
          return option.hasOwnProperty(defaultOption);
        })[0][defaultOption].map(function (optionValue) {
          return _react2.default.createElement(
            'option',
            { key: optionValue },
            optionValue
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'section',
        { className: 'TimrJS__options-example' },
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__options-example__notes' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'outputFormat'
              ),
              ' - This option specifies how many 00 should be added to the front of the time string as it counts down from hours to minutes to seconds. Defaults to ',
              _react2.default.createElement(
                'code',
                null,
                '\'mm:ss\''
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'formatType'
              ),
              ' - This option specifies whether to format the time string up to hours, up to minutes or just seconds. Defaults to ',
              _react2.default.createElement(
                'code',
                null,
                '\'h\''
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'separator'
              ),
              ' - This option specifies how the time string is separated. Defaults to ',
              _react2.default.createElement(
                'code',
                null,
                '\':\''
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__options-example__interactive' },
          _react2.default.createElement(
            _Code2.default,
            null,
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'Timr'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '\''
            ),
            _react2.default.createElement(
              'span',
              { className: 'string' },
              '20:00'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '\''
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ', { '
            ),
            _react2.default.createElement(
              'select',
              {
                ref: 'option',
                onChange: function onChange(ev) {
                  return _this4.updateOutput(ev.target.value, _this4.getDefaultOptionValue(ev.target.value));
                }
              },
              _react2.default.createElement(
                'option',
                null,
                'outputFormat'
              ),
              _react2.default.createElement(
                'option',
                null,
                'formatType'
              ),
              _react2.default.createElement(
                'option',
                null,
                'separator'
              )
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ': '
            ),
            this.generateOptionValues(),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ' });'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// Hour Example:   '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.hourOutput
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// Minute Example: '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.minuteOutput
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// Second Example: '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.secondOutput
            )
          )
        )
      );
    }
  }]);

  return OptionsExample;
}(_react2.default.Component);

var TickerExample = function (_React$Component3) {
  _inherits(TickerExample, _React$Component3);

  function TickerExample() {
    _classCallCheck(this, TickerExample);

    var _this5 = _possibleConstructorReturn(this, (TickerExample.__proto__ || Object.getPrototypeOf(TickerExample)).call(this));

    _this5.start = function () {
      return _this5.__start__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    _this5.pause = function () {
      return _this5.__pause__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    _this5.stop = function () {
      return _this5.__stop__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    _this5.state = {
      countdownFormattedTime: '10:00',
      percentDone: '0',
      countdownCurrentTime: '600',
      startTime: '600',
      stopwatchFormattedTime: '00:00',
      stopwatchCurrentTime: '0'
    };
    return _this5;
  }

  _createClass(TickerExample, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this6 = this;

      this.countdown = (0, _timrjs2.default)(600).ticker(function (countdownFormattedTime, percentDone, countdownCurrentTime, startTime) {
        _this6.setState({
          countdownFormattedTime: countdownFormattedTime,
          percentDone: percentDone,
          countdownCurrentTime: countdownCurrentTime,
          startTime: startTime
        });
      });

      this.stopwatch = (0, _timrjs2.default)(0).ticker(function (stopwatchFormattedTime, stopwatchCurrentTime) {
        _this6.setState({
          stopwatchFormattedTime: stopwatchFormattedTime,
          stopwatchCurrentTime: stopwatchCurrentTime
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.countdown.destroy();
      this.stopwatch.destroy();
    }
  }, {
    key: '__start__REACT_HOT_LOADER__',
    value: function __start__REACT_HOT_LOADER__() {
      this.countdown.start();
      this.stopwatch.start();
    }
  }, {
    key: '__pause__REACT_HOT_LOADER__',
    value: function __pause__REACT_HOT_LOADER__() {
      this.countdown.pause();
      this.stopwatch.pause();
    }
  }, {
    key: '__stop__REACT_HOT_LOADER__',
    value: function __stop__REACT_HOT_LOADER__() {
      this.countdown.stop();
      this.stopwatch.stop();

      this.setState({
        countdownFormattedTime: '10:00',
        percentDone: '0',
        countdownCurrentTime: '600',
        startTime: '600',
        stopwatchFormattedTime: '00:00',
        stopwatchCurrentTime: '0'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'TimrJS__ticker-example' },
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__ticker-example__notes' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'formattedTime'
              ),
              ' - The current time formatted into a time string. Customisable with outputFormat, formatType and separator options.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'percentDone'
              ),
              ' - The elapsed time in percent. ',
              _react2.default.createElement(
                'em',
                null,
                'Useful for making something like a progress bar.'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'currentTime'
              ),
              ' - The current time in seconds.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'startTime'
              ),
              ' - The starting time in seconds.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'self'
              ),
              ' - The original Timr object.'
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__ticker-example__interactive' },
          _react2.default.createElement(
            'section',
            { className: 'TimrJS__ticker-example__interactive__demo-buttons' },
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.start },
              'Start'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.pause },
              'Pause'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.stop },
              'Stop'
            )
          ),
          _react2.default.createElement(
            _Code2.default,
            null,
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '/* \n',
              ' * ',
              'Tickers first call will be 1 second after the timer has started.',
              '\n',
              ' * ',
              'In our current example, the first call will emit \'09:59\'.',
              '\n',
              ' *\n',
              ' * ',
              'To display the timers startTime before starting the timer, you can call',
              '\n',
              ' * ',
              'timer.formatTime() which will return, in this case, \'10:00\'.',
              '\n',
              ' */ '
            ),
            '\n',
            'timer.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'ticker'
            ),
            '(',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'parameter' },
              'formattedTime'
            ),
            ',',
            _react2.default.createElement(
              'span',
              { className: 'parameter' },
              ' percentDone'
            ),
            ',',
            _react2.default.createElement(
              'span',
              { className: 'parameter' },
              ' currentTime'
            ),
            ',',
            _react2.default.createElement(
              'span',
              { className: 'parameter' },
              ' startTime'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ')'
            ),
            _react2.default.createElement(
              'span',
              { className: 'arrow' },
              ' => '
            ),
            '{\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '  // formattedTime: '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.countdownFormattedTime
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '  // percentDone:   '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.percentDone
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '  // currentTime:   '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.countdownCurrentTime
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '  // startTime:     '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.startTime
            ),
            '\n',
            '})',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ';'
            ),
            '\n\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '/* \n',
              ' * ',
              'If the Timr has been setup as a stopwatch, ticker will only be provided',
              '\n',
              ' * ',
              'with 3 arguments: formattedTime, currentTime and self.',
              '\n',
              ' */ '
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'Timr'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'number' },
              '0'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ')'
            ),
            '.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'ticker'
            ),
            '(',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'parameter' },
              'formattedTime'
            ),
            ',',
            _react2.default.createElement(
              'span',
              { className: 'parameter' },
              ' currentTime'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ')'
            ),
            _react2.default.createElement(
              'span',
              { className: 'arrow' },
              ' => '
            ),
            '{\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '  // formattedTime: '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.stopwatchFormattedTime
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '  // currentTime:   '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.stopwatchCurrentTime
            ),
            '\n',
            '})',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ';'
            )
          )
        )
      );
    }
  }]);

  return TickerExample;
}(_react2.default.Component);

var FinishExample = function (_React$Component4) {
  _inherits(FinishExample, _React$Component4);

  function FinishExample() {
    _classCallCheck(this, FinishExample);

    var _this7 = _possibleConstructorReturn(this, (FinishExample.__proto__ || Object.getPrototypeOf(FinishExample)).call(this));

    _this7.start = function () {
      return _this7.__start__REACT_HOT_LOADER__.apply(_this7, arguments);
    };

    _this7.pause = function () {
      return _this7.__pause__REACT_HOT_LOADER__.apply(_this7, arguments);
    };

    _this7.stop = function () {
      return _this7.__stop__REACT_HOT_LOADER__.apply(_this7, arguments);
    };

    _this7.state = {
      countdownFormattedTime: '00:05',
      countdownFinish: '',
      stopwatchFormattedTime: '999:59:55',
      stopwatchFinish: ''
    };
    return _this7;
  }

  _createClass(FinishExample, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this8 = this;

      this.countdown = (0, _timrjs2.default)(5).ticker(function (countdownFormattedTime) {
        _this8.setState({ countdownFormattedTime: countdownFormattedTime });
      }).finish(function () {
        _this8.setState({ countdownFinish: 'Countdown Finished!' });
      });

      this.stopwatch = (0, _timrjs2.default)(0).ticker(function (stopwatchFormattedTime, stopwatchCurrentTime) {
        _this8.setState({ stopwatchFormattedTime: stopwatchFormattedTime });
      }).finish(function () {
        _this8.setState({ stopwatchFinish: 'Stopwatch Finished!' });
      });

      this.stopwatch.currentTime = 3599995;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.countdown.destroy();
      this.stopwatch.destroy();
    }
  }, {
    key: '__start__REACT_HOT_LOADER__',
    value: function __start__REACT_HOT_LOADER__() {
      this.countdown.start();
      this.stopwatch.start();
    }
  }, {
    key: '__pause__REACT_HOT_LOADER__',
    value: function __pause__REACT_HOT_LOADER__() {
      this.countdown.pause();
      this.stopwatch.pause();
    }
  }, {
    key: '__stop__REACT_HOT_LOADER__',
    value: function __stop__REACT_HOT_LOADER__() {
      this.countdown.stop();
      this.stopwatch.stop();
      this.stopwatch.currentTime = 3599995;

      this.setState({
        countdownFormattedTime: '00:05',
        countdownFinish: '',
        stopwatchFormattedTime: '999:59:55',
        stopwatchFinish: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'TimrJS__ticker-example' },
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__ticker-example__notes' },
          this.props.children
        ),
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__ticker-example__interactive' },
          _react2.default.createElement(
            'section',
            { className: 'TimrJS__ticker-example__interactive__demo-buttons' },
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.start },
              'Start'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.pause },
              'Pause'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.stop },
              'Stop'
            )
          ),
          _react2.default.createElement(
            _Code2.default,
            null,
            'timer.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'finish'
            ),
            '(',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ')'
            ),
            _react2.default.createElement(
              'span',
              { className: 'arrow' },
              ' => '
            ),
            '{\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '  // ticker: '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.countdownFormattedTime
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '  // finish: '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.countdownFinish
            ),
            '\n',
            '})',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ';'
            ),
            '\n\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '/* \n',
              ' * ',
              'If the Timr has been setup as a stopwatch, the timer will stop',
              '\n',
              ' * ',
              'and the finish function will fire when the time reaches the',
              '\n',
              ' * ',
              'maximum supported time of \'999:59:59\'.',
              '\n',
              ' */ '
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'Timr'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'number' },
              '0'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ')'
            ),
            '.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'finish'
            ),
            '(',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ')'
            ),
            _react2.default.createElement(
              'span',
              { className: 'arrow' },
              ' => '
            ),
            '{\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '  // ticker: '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.stopwatchFormattedTime
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '  // finish: '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.stopwatchFinish
            ),
            '\n',
            '})',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ';'
            )
          )
        )
      );
    }
  }]);

  return FinishExample;
}(_react2.default.Component);

var ControlExample = function (_React$Component5) {
  _inherits(ControlExample, _React$Component5);

  function ControlExample() {
    _classCallCheck(this, ControlExample);

    var _this9 = _possibleConstructorReturn(this, (ControlExample.__proto__ || Object.getPrototypeOf(ControlExample)).call(this));

    _this9.handleChange = function () {
      return _this9.__handleChange__REACT_HOT_LOADER__.apply(_this9, arguments);
    };

    _this9.state = {
      mainOutput: '00:05',
      delayOutput: '0s'
    };
    return _this9;
  }

  _createClass(ControlExample, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this10 = this;

      this.timer = (0, _timrjs2.default)(5).ticker(function (ft) {
        return _this10.setState({ mainOutput: ft });
      });
      this.delayTimer = (0, _timrjs2.default)(5, { outputFormat: 'ss', formatType: 's' }).ticker(function (ft) {
        return _this10.setState({ delayOutput: ft + 's' });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.timer.destroy();
      this.delayTimer.destroy();
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(ev) {
      var delay = Number(ev.target.value);

      this.timer.stop();
      this.delayTimer.stop();
      this.setState({ mainOutput: '00:05' });

      if (delay / 1000 > 0) {
        try {
          this.delayTimer.setStartTime(Math.ceil(delay / 1000));
          this.setState({ delayOutput: delay / 1000 + 's' });
          this.delayTimer.start();
        } catch (e) {
          this.setState({ delayOutput: 'Invalid Syntax' });
          this.delayTimer.stop();
        }
      }

      this.timer.start(delay);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'TimrJS__ticker-example' },
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__ticker-example__notes' },
          this.props.children
        ),
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__ticker-example__interactive' },
          _react2.default.createElement(
            _Code2.default,
            null,
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '/* \n',
              ' * ',
              'Start takes an optional number (in ms) argument that will',
              '\n',
              ' * ',
              'delay the start of the timer.',
              '\n',
              ' */ '
            ),
            '\n',
            'timer.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'start'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement('input', { onChange: this.handleChange, placeholder: 'Delay...' }),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// Delay:  '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.delayOutput
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// Output: '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.mainOutput
            ),
            '\n',
            'timer.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'pause'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n',
            'timer.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'stop'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n'
          )
        )
      );
    }
  }]);

  return ControlExample;
}(_react2.default.Component);

var StoreExample = function (_React$Component6) {
  _inherits(StoreExample, _React$Component6);

  function StoreExample() {
    _classCallCheck(this, StoreExample);

    var _this11 = _possibleConstructorReturn(this, (StoreExample.__proto__ || Object.getPrototypeOf(StoreExample)).call(this));

    _this11.stop = function () {
      return _this11.__stop__REACT_HOT_LOADER__.apply(_this11, arguments);
    };

    _this11.state = {
      timer1: '20:00',
      timer2: '15:00',
      timer3: '10:00',
      timer4: '05:00'
    };
    return _this11;
  }

  _createClass(StoreExample, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this12 = this;

      this.timer1 = (0, _timrjs2.default)('20:00').ticker(function (ft) {
        return _this12.setState({ timer1: ft });
      });
      this.timer2 = (0, _timrjs2.default)('15:00').ticker(function (ft) {
        return _this12.setState({ timer2: ft });
      });
      this.timer3 = (0, _timrjs2.default)('10:00').ticker(function (ft) {
        return _this12.setState({ timer3: ft });
      });
      this.timer4 = (0, _timrjs2.default)('05:00').ticker(function (ft) {
        return _this12.setState({ timer4: ft });
      });

      this.store1 = _timrjs2.default.createStore(this.timer1, this.timer2);
      this.store2 = _timrjs2.default.createStore(this.timer2, this.timer3, this.timer4);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.store1.destroyAll();
      this.store2.destroyAll();
    }
  }, {
    key: '__stop__REACT_HOT_LOADER__',
    value: function __stop__REACT_HOT_LOADER__(store) {
      this[store].stopAll();

      this.setState({
        timer1: this.timer1.formatTime(),
        timer2: this.timer2.formatTime(),
        timer3: this.timer3.formatTime(),
        timer4: this.timer4.formatTime()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this13 = this;

      return _react2.default.createElement(
        'section',
        { className: 'TimrJS__ticker-example' },
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__ticker-example__interactive' },
          _react2.default.createElement(
            'section',
            { className: 'TimrJS__ticker-example__interactive__demo-buttons' },
            _react2.default.createElement(
              'h3',
              null,
              'Store 1'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick() {
                  return _this13.store1.startAll();
                } },
              'Start'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick() {
                  return _this13.store1.pauseAll();
                } },
              'Pause'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick() {
                  return _this13.stop('store1');
                } },
              'Stop'
            )
          ),
          _react2.default.createElement(
            'section',
            { className: 'TimrJS__ticker-example__interactive__demo-buttons' },
            _react2.default.createElement(
              'h3',
              null,
              'Store 2'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick() {
                  return _this13.store2.startAll();
                } },
              'Start'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick() {
                  return _this13.store2.pauseAll();
                } },
              'Pause'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick() {
                  return _this13.stop('store2');
                } },
              'Stop'
            )
          ),
          _react2.default.createElement(
            _Code2.default,
            null,
            _react2.default.createElement(
              'span',
              { className: 'storage' },
              'const '
            ),
            'timer1',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ' = '
            ),
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'Timr'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'string' },
              '\'20:00\''
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.timer1
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'storage' },
              'const '
            ),
            'timer2',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ' = '
            ),
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'Timr'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'string' },
              '\'15:00\''
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.timer2
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'storage' },
              'const '
            ),
            'timer3',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ' = '
            ),
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'Timr'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'string' },
              '\'10:00\''
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.timer3
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'storage' },
              'const '
            ),
            'timer4',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ' = '
            ),
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'Timr'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'string' },
              '\'5:00\''
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.timer4
            ),
            '\n\n',
            _react2.default.createElement(
              'span',
              { className: 'storage' },
              'const '
            ),
            'store1',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ' = '
            ),
            'Timr.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'createStore'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            'timer1, timer2',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'storage' },
              'const '
            ),
            'store2',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ' = '
            ),
            'Timr.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'createStore'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '(['
            ),
            'timer2, timer3, timer4',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ']);'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// Because timer2 already exists in store1, it won\'t be added to store2.'
            )
          )
        )
      );
    }
  }]);

  return StoreExample;
}(_react2.default.Component);

var UtilitiesExample = function (_React$Component7) {
  _inherits(UtilitiesExample, _React$Component7);

  function UtilitiesExample() {
    _classCallCheck(this, UtilitiesExample);

    var _this14 = _possibleConstructorReturn(this, (UtilitiesExample.__proto__ || Object.getPrototypeOf(UtilitiesExample)).call(this));

    _this14.handleChange = function () {
      return _this14.__handleChange__REACT_HOT_LOADER__.apply(_this14, arguments);
    };

    _this14.state = {
      validate: '600',
      timeToSeconds: '600',
      correctFormat: 'true'
    };
    return _this14;
  }

  _createClass(UtilitiesExample, [{
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(fn, value) {
      try {
        this.setState(_defineProperty({}, fn, _timrjs2.default[fn](value).toString()));
      } catch (e) {
        this.setState(_defineProperty({}, fn, e.toString()));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this15 = this;

      return _react2.default.createElement(
        'section',
        { className: 'TimrJS__ticker-example' },
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__ticker-example__interactive' },
          _react2.default.createElement(
            _Code2.default,
            null,
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '/*\n',
              ' * ',
              'FormatTime essentially takes the same arguments as',
              '\n',
              ' * ',
              'Timr instantiation, except it returns a string rather than',
              '\n',
              ' * ',
              'a Timr object. For example, see:',
              ' ',
              _react2.default.createElement(
                'a',
                { href: '#options' },
                'options'
              ),
              '\n',
              ' */\n\n'
            ),
            'Timr.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'validate'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement('input', {
              defaultValue: '10:00',
              onChange: function onChange(ev) {
                return _this15.handleChange('validate', ev.target.value);
              }
            }),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.validate
            ),
            '\n',
            'Timr.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'timeToSeconds'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement('input', {
              defaultValue: '10:00',
              onChange: function onChange(ev) {
                return _this15.handleChange('timeToSeconds', ev.target.value);
              }
            }),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.timeToSeconds
            ),
            '\n',
            'Timr.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'correctFormat'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement('input', {
              defaultValue: '10:00',
              onChange: function onChange(ev) {
                return _this15.handleChange('correctFormat', ev.target.value);
              }
            }),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ');'
            ),
            '\n',
            _react2.default.createElement(
              'span',
              { className: 'comment' },
              '// '
            ),
            _react2.default.createElement(
              'span',
              { className: 'output' },
              this.state.correctFormat
            )
          )
        )
      );
    }
  }]);

  return UtilitiesExample;
}(_react2.default.Component);

var TimrJS = function (_React$Component8) {
  _inherits(TimrJS, _React$Component8);

  function TimrJS() {
    _classCallCheck(this, TimrJS);

    var _this16 = _possibleConstructorReturn(this, (TimrJS.__proto__ || Object.getPrototypeOf(TimrJS)).call(this));

    _this16.state = {
      title: '00:05'
    };
    return _this16;
  }

  _createClass(TimrJS, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this17 = this;

      this.timer = (0, _timrjs2.default)(5).ticker(function (ft) {
        return _this17.setState({ title: ft });
      }).finish(function () {
        return setTimeout(function () {
          return _this17.setState({ title: 'TimrJS' });
        }, 1000);
      }).start();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.timer.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var title = this.state.title;


      return _react2.default.createElement(
        'section',
        { className: 'TimrJS' },
        _react2.default.createElement(
          'header',
          { className: 'TimrJS__header' },
          _react2.default.createElement(
            'section',
            { className: 'TimrJS__header__container container' },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'TimrJS__header__projects-link', to: '/projects' },
              _react2.default.createElement(
                'i',
                { className: 'TimrJS__header__projects-link__icon material-icons' },
                'keyboard_arrow_left'
              ),
              ' projects'
            ),
            _react2.default.createElement(
              'h1',
              { className: 'TimrJS__header__title' },
              title
            ),
            _react2.default.createElement(
              'h4',
              null,
              'A simple, event driven, utility for creating timers in JavaScript.'
            ),
            _react2.default.createElement(
              _Button2.default,
              {
                color: 'blue',
                all: true,
                className: 'TimrJS__header__github',
                onClick: function onClick() {
                  return window.open('https://github.com/joesmith100/timrjs');
                }
              },
              'Github'
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'TimrJS__main container' },
          _react2.default.createElement(
            'p',
            null,
            'Compatible with Browsers and Node.js.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The compiled versions also support RequireJS.'
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Interactive Examples'
          ),
          _react2.default.createElement(
            'p',
            null,
            'To help you better visualise how some of the functions and methods work, this page has a number of interactive examples. When you see a code block, text using ',
            _react2.default.createElement(
              'em',
              { className: 'TimrJS__main__output-example' },
              'this color'
            ),
            ' denotes the output from that example.'
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Installation'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Install with npm or bower.'
          ),
          _react2.default.createElement(
            _Code2.default,
            null,
            'npm install --save timrjs'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Alternatively, include the following CDN in your project:'
          ),
          _react2.default.createElement(
            'blockquote',
            null,
            _react2.default.createElement(
              'a',
              {
                href: 'https://cdn.jsdelivr.net/timrjs/latest/timr.js',
                target: '_blank'
              },
              'https://cdn.jsdelivr.net/timrjs/latest/timr.js'
            ),
            _react2.default.createElement(
              'a',
              {
                href: 'https://cdn.jsdelivr.net/timrjs/latest/timr.min.js',
                target: '_blank'
              },
              'https://cdn.jsdelivr.net/timrjs/latest/timr.min.js'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Or include ',
            _react2.default.createElement(
              'code',
              null,
              'node_modules/dist/timr.min.js'
            ),
            ' on your page with a standalone ',
            _react2.default.createElement(
              'code',
              null,
              '<script>'
            ),
            ' tag.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Both of these will expose a single global method ',
            _react2.default.createElement(
              'code',
              null,
              'Timr'
            ),
            '. Alternatively, they will define a module if you are using RequireJS: ',
            _react2.default.createElement(
              'code',
              null,
              'require([\'Timr\'])'
            ),
            '.'
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Syntax'
          ),
          _react2.default.createElement(
            _Code2.default,
            null,
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'Timr'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '('
            ),
            _react2.default.createElement(
              'span',
              { className: 'parameter' },
              'startTime'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '[,'
            ),
            _react2.default.createElement(
              'span',
              { className: 'parameter' },
              ' options'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ']);'
            )
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Parameters'
          ),
          _react2.default.createElement(
            'h5',
            null,
            'startTime'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Accepts a string or a number; a number is treated as seconds. Examples of accepted syntax:'
          ),
          _react2.default.createElement(StartExample, null),
          _react2.default.createElement(
            'h5',
            { id: 'options' },
            'options'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Optional. Object which accepts:'
          ),
          _react2.default.createElement(OptionsExample, null),
          _react2.default.createElement(
            'h3',
            null,
            'Basic Usage'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Import Timr into your project.'
          ),
          _react2.default.createElement(
            _Code2.default,
            null,
            _react2.default.createElement(
              'span',
              { className: 'keyword' },
              'import '
            ),
            'Timr',
            _react2.default.createElement(
              'span',
              { className: 'keyword' },
              ' from '
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '\''
            ),
            _react2.default.createElement(
              'span',
              { className: 'string' },
              'timrjs'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '\';'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Start by calling the Timr function with the desired ',
            _react2.default.createElement(
              'code',
              null,
              'startTime'
            ),
            ' and any ',
            _react2.default.createElement(
              'code',
              null,
              'options'
            ),
            '. This will return a new Timr Object.'
          ),
          _react2.default.createElement(
            _Code2.default,
            null,
            _react2.default.createElement(
              'span',
              { className: 'storage' },
              'const '
            ),
            'timer',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ' = '
            ),
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'Timr'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '(\''
            ),
            _react2.default.createElement(
              'span',
              { className: 'string' },
              '10:00'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '\');'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Each Timr emits 2 events: ',
            _react2.default.createElement(
              'code',
              null,
              'ticker'
            ),
            ' and ',
            _react2.default.createElement(
              'code',
              null,
              'finish'
            ),
            '.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The ',
            _react2.default.createElement(
              'code',
              null,
              'ticker'
            ),
            ' function is called every second the timer ticks down and is provided with the following arguments:'
          ),
          _react2.default.createElement(TickerExample, null),
          _react2.default.createElement(
            'p',
            null,
            'The ',
            _react2.default.createElement(
              'code',
              null,
              'finish'
            ),
            ' method is called once, when the timer hits 0. Only 1 argument is provided into the function, the original Timr object.'
          ),
          _react2.default.createElement(FinishExample, null),
          _react2.default.createElement(
            'p',
            null,
            'To control the Timr, you use the ',
            _react2.default.createElement(
              'code',
              null,
              'start'
            ),
            ', ',
            _react2.default.createElement(
              'code',
              null,
              'pause'
            ),
            ' and ',
            _react2.default.createElement(
              'code',
              null,
              'start'
            ),
            ' methods.'
          ),
          _react2.default.createElement(ControlExample, null),
          _react2.default.createElement(
            'p',
            null,
            'All of the methods discussed thus for return a reference to the original Timr so calls can be chained. The same goes for the rest of the methods below, unless they specifically return a value, like, ',
            _react2.default.createElement(
              'code',
              null,
              'timer.formatTime()'
            )
          ),
          _react2.default.createElement(
            'h4',
            null,
            'API'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The following methods are available to all Timrs:'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'start([delay])'
              ),
              ' - Starts the timer. Optionally delays starting by the provided ms.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'pause()'
              ),
              ' - Pauses the timer.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'stop()'
              ),
              ' - Stops the timer.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'destroy()'
              ),
              ' - Stops the timer, removes all event listeners and removes the timr from the store (if it\'s in one).'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'ticker(fn)'
              ),
              ' - The provided function executes every second the timer ticks down.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'finish(fn)'
              ),
              ' - The provided function executes once the timer finishes.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'formatTime([\'startTime\'])'
              ),
              ' - Returns the currentTime, formatted. Optionally accepts the string \'startTime\', which will return the startTime formatted.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'changeOptions(options)'
              ),
              ' - Merges the provided options into the existing ones. See: ',
              _react2.default.createElement(
                'a',
                { href: '#options' },
                'options'
              ),
              ' for available options.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'setStartTime(newStartTime)'
              ),
              ' - Changes the startTime to the one provided and returns it formatted. Will stop the timer if its running. It\'s also subject to validation, so will throw an error if the provided time is invalid.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'getStartTime()'
              ),
              ' - Returns the startTime in seconds.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'getCurrentTime()'
              ),
              ' - Returns the currentTime in seconds.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'isRunning()'
              ),
              ' - Returns true if the timer is running, false otherwise.'
            )
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Top Level API'
          ),
          _react2.default.createElement(
            'h4',
            null,
            'createStore'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The createStore function provides a way to easily store multiple timrs together and perform various operations on all of them at the same time.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'It is available on the imported Timr Object.'
          ),
          _react2.default.createElement(
            _Code2.default,
            null,
            _react2.default.createElement(
              'span',
              { className: 'keyword' },
              'const '
            ),
            'store',
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              ' = '
            ),
            'Timr.',
            _react2.default.createElement(
              'span',
              { className: 'function' },
              'createStore'
            ),
            _react2.default.createElement(
              'span',
              { className: 'punctuation' },
              '();'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'It also accepts Timr objects; these can be as separate arguments or together in an Array.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'If any non-Timr arguments are provided, they will be removed from the array. If a Timr object also exists in another store, they won\'t be added to a new one.'
          ),
          _react2.default.createElement(StoreExample, null),
          _react2.default.createElement(
            'h5',
            null,
            'API'
          ),
          _react2.default.createElement(
            'p',
            null,
            'When createStore is called, it will return an object with the following methods:'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'add(timr)'
              ),
              ' - Adds the provided Timr to the store. If it already exits in a store, then it won\'t add it. Returns the provided Timr.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'getAll()'
              ),
              ' - Returns the array of all stored Timrs.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'startAll()'
              ),
              ' - Starts all stored Timrs.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'pauseAll()'
              ),
              ' - Pauses all stored Timrs.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'stopAll()'
              ),
              ' - Stops all stored Timrs.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'isRunning()'
              ),
              ' - Returns a new array of all stored Timrs that are running.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'removeFromStore(timr)'
              ),
              ' - Removes the provided Timr from the store.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'destroyAll()'
              ),
              ' - Destroys all stored Timrs.'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'As you can see in the example above, each store is isolated, so methods run on one won\'t affect another.'
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Utilities'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The following methods are available on the imported Timr object.'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'Timr.validate(startTime)'
              ),
              ' - Validates the startTime and returns it converted into seconds.'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Ensures provided time is a number or a string.'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Ensures it is not a negative number.'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Checks validity of time string.'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Ensures provided time does not exceed \'999:59:59\'.'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'Timr.formatTime(seconds, options)'
              ),
              ' - Converts seconds into a time string. Used by Timrs when outputting their formattedTime.'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  'seconds'
                ),
                ' - Required. The seconds to be converted.'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  'options'
                ),
                ' - See: ',
                _react2.default.createElement(
                  'a',
                  { href: '#options' },
                  'parameters > options'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'Timr.timeToSeconds(time)'
              ),
              ' -  Converts a time string into seconds. Must be separated by a colon, e.g. \'10:00\'. Used in the validate method.'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'code',
                null,
                'Timr.correctFormat(time)'
              ),
              ' - Checks the format of a time string. Must be separated by a colon, e.g. \'10:00\'. Used in the validate method.'
            )
          ),
          _react2.default.createElement(UtilitiesExample, null),
          _react2.default.createElement(
            'h3',
            null,
            'Bugs'
          ),
          _react2.default.createElement(
            'p',
            null,
            'This is my first contribution to the Open Source community so I fully expect there to be bugs.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'If you find any and fancy helping me out, ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/joesmith100/timrjs/issues', target: '_blank' },
              'create an issue'
            ),
            ', or send a ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/joesmith100/timrjs/pulls', target: '_blank' },
              'pull request'
            ),
            '.'
          ),
          _react2.default.createElement(
            'h3',
            null,
            'License'
          ),
          _react2.default.createElement(
            'p',
            null,
            'MIT'
          )
        )
      );
    }
  }]);

  return TimrJS;
}(_react2.default.Component);

var _default = TimrJS;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(StartExample, 'StartExample', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TimrJS.js');

  __REACT_HOT_LOADER__.register(OptionsExample, 'OptionsExample', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TimrJS.js');

  __REACT_HOT_LOADER__.register(TickerExample, 'TickerExample', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TimrJS.js');

  __REACT_HOT_LOADER__.register(FinishExample, 'FinishExample', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TimrJS.js');

  __REACT_HOT_LOADER__.register(ControlExample, 'ControlExample', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TimrJS.js');

  __REACT_HOT_LOADER__.register(StoreExample, 'StoreExample', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TimrJS.js');

  __REACT_HOT_LOADER__.register(UtilitiesExample, 'UtilitiesExample', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TimrJS.js');

  __REACT_HOT_LOADER__.register(TimrJS, 'TimrJS', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TimrJS.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TimrJS.js');
}();

;