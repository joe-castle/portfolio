'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ProjectNotes = require('./ProjectNotes');

var _ProjectNotes2 = _interopRequireDefault(_ProjectNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO: Call to action on mobile, show which button starts the game,
// with an animation?
// TODO: Finetune html5 audio problems

function GamePiece(_ref) {
  var _classNames;

  var color = _ref.color,
      flash = _ref.flash,
      active = _ref.active,
      playing = _ref.playing,
      children = _ref.children,
      userInput = _ref.userInput;

  var events = void 0;

  // Try/catch stop server render from erroring as window is not defined.
  // Events will be bound on the client.
  try {
    if ('ontouchstart' in window) {
      events = { onTouchStart: userInput };
    } else {
      events = { onMouseDown: userInput };
    }
  } catch (e) {}

  return _react2.default.createElement(
    'div',
    _extends({}, events, {
      className: (0, _classnames2.default)((_classNames = {
        'SimonGame__piece': true
      }, _defineProperty(_classNames, 'SimonGame__piece--' + color, true), _defineProperty(_classNames, 'SimonGame__piece--' + color + '--active', active), _defineProperty(_classNames, 'SimonGame__piece--flash', flash), _defineProperty(_classNames, 'SimonGame__piece--playing', playing), _classNames))
    }),
    children
  );
}

var SimonGame = function (_React$Component) {
  _inherits(SimonGame, _React$Component);

  function SimonGame() {
    _classCallCheck(this, SimonGame);

    var _this = _possibleConstructorReturn(this, (SimonGame.__proto__ || Object.getPrototypeOf(SimonGame)).call(this));

    _this.strict = function () {
      return _this.__strict__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.power = function () {
      return _this.__power__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.start = function () {
      return _this.__start__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.nextGo = function () {
      return _this.__nextGo__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.generatePlayPiece = function () {
      return _this.__generatePlayPiece__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.playGo = function () {
      return _this.__playGo__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.compareGo = function () {
      return _this.__compareGo__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.userInput = function () {
      return _this.__userInput__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.resetPieces = function () {
      return _this.__resetPieces__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.flashPiece = function () {
      return _this.__flashPiece__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.fail = function () {
      return _this.__fail__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.win = function () {
      return _this.__win__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.clear = function () {
      return _this.__clear__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.reset = function () {
      return _this.__reset__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.zeroPad = function () {
      return _this.__zeroPad__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.addTimer = function () {
      return _this.__addTimer__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.initialState = _this.state = {
      power: false,
      running: false,
      strict: false,
      playing: false,
      speed: 0,
      steps: 0,
      stepsFlash: false,
      winFlash: false,
      playOrder: [],
      playPiece: 0,
      timer: null,
      timers: [],
      activePieces: _this.initialActivePieces = {
        green: false,
        red: false,
        yellow: false,
        blue: false
      }
    };
    return _this;
  }

  _createClass(SimonGame, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reset();
    }
  }, {
    key: '__strict__REACT_HOT_LOADER__',
    value: function __strict__REACT_HOT_LOADER__() {
      if (!this.state.running && this.state.power) {
        this.setState({ strict: !this.state.strict });
      }
    }
  }, {
    key: '__power__REACT_HOT_LOADER__',
    value: function __power__REACT_HOT_LOADER__() {
      // Forces mobile browsers to perload the audio files before use
      // for (let key in this.refs) {
      //   this.refs[key].volume = 0;
      //   this.refs[key].play();
      //   this.refs[key].pause();
      //   this.refs[key].volume = 1;
      // }

      this.reset();
      this.setState(_extends({}, this.initialState, {
        power: !this.state.power
      }));
    }
  }, {
    key: '__start__REACT_HOT_LOADER__',
    value: function __start__REACT_HOT_LOADER__() {
      var _this2 = this;

      if (!this.state.runnning && this.state.power) {
        this.setState({
          stepsFlash: true,
          running: true
        });

        // Timer allows the starting flash animation to finish.
        this.addTimer(function () {
          _this2.setState({ stepsFlash: false });
          _this2.nextGo();
        }, 2000);
      }
    }
  }, {
    key: '__nextGo__REACT_HOT_LOADER__',
    value: function __nextGo__REACT_HOT_LOADER__() {
      var _state = this.state,
          steps = _state.steps,
          speed = _state.speed;


      if (steps < 20) {
        this.generatePlayPiece();
        this.setState({
          steps: steps + 1,
          speed: steps === 4 || steps === 8 || steps === 12 ? speed + 250 : speed
        });
        this.playGo();
      } else {
        this.win();
      }
    }
  }, {
    key: '__generatePlayPiece__REACT_HOT_LOADER__',
    value: function __generatePlayPiece__REACT_HOT_LOADER__() {
      this.setState(function (_ref2) {
        var playOrder = _ref2.playOrder,
            activePieces = _ref2.activePieces;
        return {
          playOrder: [].concat(_toConsumableArray(playOrder.slice()), [Object.keys(activePieces)[Math.floor(Math.random() * 4)]])
        };
      });
    }
  }, {
    key: '__playGo__REACT_HOT_LOADER__',
    value: function __playGo__REACT_HOT_LOADER__() {
      var _this3 = this;

      var _state2 = this.state,
          playOrder = _state2.playOrder,
          speed = _state2.speed;

      // Resets the playPiece in the event of a failed go

      this.setState({ playPiece: 0 });

      playOrder.forEach(function (piece, index) {
        _this3.addTimer(function () {
          _this3.flashPiece(piece);

          _this3.addTimer(_this3.resetPieces, 1000 - speed);
        }, index * (1250 - speed));
      });

      this.addTimer(this.setState, playOrder.length * (1250 - speed), { playing: true });
    }
  }, {
    key: '__compareGo__REACT_HOT_LOADER__',
    value: function __compareGo__REACT_HOT_LOADER__(piece) {
      var _state3 = this.state,
          playOrder = _state3.playOrder,
          playPiece = _state3.playPiece;


      if (piece === playOrder[playPiece]) {
        this.setState({ playPiece: playPiece + 1 });

        if (playPiece >= playOrder.length - 1) {
          this.setState({ playing: false });

          this.addTimer(this.nextGo, 500);
        }
      } else {
        this.addTimer(this.fail, 100);
      }
    }
  }, {
    key: '__userInput__REACT_HOT_LOADER__',
    value: function __userInput__REACT_HOT_LOADER__(piece) {
      var _this4 = this;

      if (this.state.playing) {
        (function () {
          var listener = function listener() {
            _this4.resetPieces();
            _this4.compareGo(piece);

            window.removeEventListener('mouseup', listener);
            window.removeEventListener('touchend', listener);
          };

          _this4.flashPiece(piece);

          window.addEventListener('mouseup', listener);
          window.addEventListener('touchend', listener);
        })();
      }
    }
  }, {
    key: '__resetPieces__REACT_HOT_LOADER__',
    value: function __resetPieces__REACT_HOT_LOADER__() {
      this.setState({ activePieces: this.initialActivePieces });

      for (var key in this.refs) {
        this.refs[key].pause();
        this.refs[key].currentTime = 0;
      }
    }
  }, {
    key: '__flashPiece__REACT_HOT_LOADER__',
    value: function __flashPiece__REACT_HOT_LOADER__(piece) {
      this.setState({
        activePieces: _extends({}, this.initialActivePieces, _defineProperty({}, piece, true))
      });

      this.refs[piece].play();
    }
  }, {
    key: '__fail__REACT_HOT_LOADER__',
    value: function __fail__REACT_HOT_LOADER__() {
      var _this5 = this;

      var steps = this.state.steps;


      this.clear();
      this.refs.fail.play();

      this.setState({
        steps: '!!',
        stepsFlash: true,
        playing: false
      });

      if (this.state.strict) {
        this.addTimer(function () {
          _this5.reset();
          _this5.setState({ running: true });
          _this5.nextGo();
        }, 2000);
      } else {
        this.addTimer(function () {
          _this5.setState(function (state) {
            return {
              steps: steps,
              stepsFlash: false
            };
          });

          _this5.playGo();
        }, 2000);
      }
    }
  }, {
    key: '__win__REACT_HOT_LOADER__',
    value: function __win__REACT_HOT_LOADER__() {
      this.clear();
      this.refs.win.play();

      this.setState({
        steps: '**',
        stepsFlash: true,
        playing: false,
        winFlash: this.state.playOrder[this.state.playOrder.length - 1]
      });

      this.addTimer(this.reset, 2000);
    }
  }, {
    key: '__clear__REACT_HOT_LOADER__',
    value: function __clear__REACT_HOT_LOADER__() {
      this.state.timers.forEach(function (timer) {
        return clearTimeout(timer);
      });
      this.resetPieces();
    }
  }, {
    key: '__reset__REACT_HOT_LOADER__',
    value: function __reset__REACT_HOT_LOADER__() {
      this.clear();

      this.setState(_extends({}, this.initialState, {
        power: true,
        strict: this.state.strict
      }));
    }
  }, {
    key: '__zeroPad__REACT_HOT_LOADER__',
    value: function __zeroPad__REACT_HOT_LOADER__(num) {
      return num < 10 ? '0' + num : '' + num;
    }
  }, {
    key: '__addTimer__REACT_HOT_LOADER__',
    value: function __addTimer__REACT_HOT_LOADER__(cb, time, arg) {
      this.setState({
        timers: [].concat(_toConsumableArray(this.state.timers.slice()), [setTimeout(cb.bind(this, arg), time)])
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _state4 = this.state,
          steps = _state4.steps,
          power = _state4.power,
          strict = _state4.strict,
          running = _state4.running,
          playing = _state4.playing,
          winFlash = _state4.winFlash,
          stepsFlash = _state4.stepsFlash,
          activePieces = _state4.activePieces;


      return _react2.default.createElement(
        'section',
        { className: 'SimonGame__wrapper' },
        _react2.default.createElement(
          'section',
          { className: (0, _classnames2.default)({
              'SimonGame': true,
              'SimonGame--on': power,
              'SimonGame--off': !power
            }) },
          _react2.default.createElement(
            'div',
            { className: 'SimonGame__settings' },
            _react2.default.createElement(
              'div',
              {
                onClick: this.strict,
                className: (0, _classnames2.default)({
                  'SimonGame__settings__strict': true,
                  'SimonGame__settings__strict--active': strict
                })
              },
              'Strict'
            ),
            _react2.default.createElement(
              'div',
              {
                onClick: function onClick() {
                  return running ? _this6.reset() : _this6.start();
                },
                className: (0, _classnames2.default)({
                  'SimonGame__settings__steps': true,
                  'SimonGame__settings__steps--running': running,
                  'SimonGame__settings__steps--not-running': !running,
                  'SimonGame__settings__steps--flash': stepsFlash
                })
              },
              this.zeroPad(steps)
            ),
            _react2.default.createElement(
              'div',
              {
                onClick: this.power,
                className: 'SimonGame__settings__switch'
              },
              power ? 'On' : 'Off'
            )
          ),
          Object.keys(activePieces).map(function (piece) {
            return _react2.default.createElement(
              GamePiece,
              {
                key: piece,
                color: piece,
                playing: playing,
                flash: winFlash === piece,
                active: activePieces[piece] && 'active',
                userInput: function userInput() {
                  return _this6.userInput(piece);
                }
              },
              _react2.default.createElement('audio', {
                ref: piece,
                type: 'audio/mp3',
                src: 'http://cpres.herokuapp.com/simon-game/' + piece + '.mp3'
              })
            );
          }),
          ['win', 'fail'].map(function (sound) {
            return _react2.default.createElement('audio', {
              key: sound,
              ref: sound,
              type: 'audio/wav',
              src: 'http://cpres.herokuapp.com/simon-game/' + sound + '.wav'
            });
          })
        ),
        _react2.default.createElement(_ProjectNotes2.default, {
          title: 'Simon Game',
          js: 'e4119e99b570642efbf791954eb6bf5c',
          css: '487c8fa788db61bcfb1455232829ce7d',
          titleLink: 'https://www.freecodecamp.com/challenges/build-a-simon-game',
          objective: 'Build a working Simon Game app that is functionally similar to: ',
          objectiveLink: 'http://codepen.io/FreeCodeCamp/full/bELRjV',
          userStories: ['I am presented with a random series of button presses.', 'Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.', 'I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.', 'If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.', 'I can see how many steps are in the current series of button presses.', 'If I want to restart, I can hit a button to do so, and the game will return to a single step.', 'I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.', 'I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.']
        })
      );
    }
  }]);

  return SimonGame;
}(_react2.default.Component);

var _default = SimonGame;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GamePiece, 'GamePiece', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/SimonGame.js');

  __REACT_HOT_LOADER__.register(SimonGame, 'SimonGame', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/SimonGame.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/SimonGame.js');
}();

;