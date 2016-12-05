'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shortid = require('shortid');

var _ProjectNotes = require('./ProjectNotes');

var _ProjectNotes2 = _interopRequireDefault(_ProjectNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function makePromiseCancelable(promise) {
  var _hasCancelled = false;

  var cancelablePromise = new Promise(function (resolve, reject) {
    promise.then(function (data) {
      _hasCancelled ? reject('Promise Cancelled') : resolve(data);
    }).catch(function (error) {
      _hasCancelled ? reject('Promise Cancelled') : resolve(error);
    });
  });

  return {
    promise: cancelablePromise,
    cancel: function cancel() {
      return _hasCancelled = true;
    }
  };
}

function Nav(_ref) {
  var filter = _ref.filter,
      setFilter = _ref.setFilter;

  return _react2.default.createElement(
    'nav',
    { className: 'TwitchApp__header__nav' },
    ['All', 'Online', 'Offline'].map(function (item) {
      return _react2.default.createElement(
        'span',
        {
          onClick: function onClick() {
            return setFilter(item);
          },
          key: item,
          className: (0, _classnames2.default)({
            'TwitchApp__header__nav__item': true,
            'TwitchApp__header__nav__item--active': filter === item
          })
        },
        item
      );
    })
  );
}

function StreamersBox(_ref2) {
  var filter = _ref2.filter,
      streamers = _ref2.streamers,
      searchString = _ref2.searchString,
      deleteStreamer = _ref2.deleteStreamer;

  return _react2.default.createElement(
    'section',
    { className: 'TwitchApp__streamers-box' },
    streamers.filter(function (_ref3) {
      var name = _ref3.name,
          online = _ref3.online;
      return RegExp(searchString, 'ig').test(name) && (filter === 'All' || filter === 'Online' && online || filter === 'Offline' && !online);
    }).map(function (streamer) {
      return _react2.default.createElement(Streamer, _extends({
        key: streamer.id,
        deleteStreamer: deleteStreamer
      }, streamer));
    })
  );
}

function Streamer(_ref4) {
  var id = _ref4.id,
      logo = _ref4.logo,
      name = _ref4.name,
      error = _ref4.error,
      status = _ref4.status,
      online = _ref4.online,
      deleteStreamer = _ref4.deleteStreamer;

  return _react2.default.createElement(
    'article',
    { className: (0, _classnames2.default)({
        'TwitchApp__streamers-box__streamer': true,
        'TwitchApp__streamers-box__streamer--online': online
      }) },
    _react2.default.createElement(
      'figure',
      null,
      _react2.default.createElement('img', {
        className: 'TwitchApp__streamers-box__streamer__logo',
        src: logo
      }),
      _react2.default.createElement(
        'figcaption',
        { className: 'TwitchApp__streamers-box__streamer__name' },
        _react2.default.createElement(
          'a',
          { href: 'http://www.twitch.tv/' + name, target: '_blank' },
          name
        )
      )
    ),
    _react2.default.createElement(
      'aside',
      { className: 'TwitchApp__streamers-box__streamer__status' },
      error || online && status
    ),
    _react2.default.createElement(
      'i',
      {
        className: 'TwitchApp__streamers-box__streamer__status-icon material-icons'
      },
      online ? 'radio_button_checked' : 'radio_button_unchecked'
    ),
    _react2.default.createElement(
      'i',
      {
        onClick: function onClick() {
          return deleteStreamer(id);
        },
        className: 'TwitchApp__streamers-box__streamer__delete-icon material-icons'
      },
      'close'
    )
  );
}

var TwitchApp = function (_React$Component) {
  _inherits(TwitchApp, _React$Component);

  function TwitchApp() {
    _classCallCheck(this, TwitchApp);

    var _this = _possibleConstructorReturn(this, (TwitchApp.__proto__ || Object.getPrototypeOf(TwitchApp)).call(this));

    _this.getStreamer = function () {
      return _this.__getStreamer__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.fetchStreamer = function () {
      return _this.__fetchStreamer__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.addStreamer = function () {
      return _this.__addStreamer__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.checkAccountStatus = function () {
      return _this.__checkAccountStatus__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.deleteStreamer = function () {
      return _this.__deleteStreamer__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      streamers: [],
      searchString: '',
      filter: 'All',
      fetching: false
    };

    _this.streamerFetchs = [];
    return _this;
  }

  _createClass(TwitchApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.livePreview || ['brunofin', 'comster404', 'freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'medrybw'].forEach(this.getStreamer);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.streamerFetchs.forEach(function (streamerFetch) {
        streamerFetch.cancel();
      });
    }
  }, {
    key: '__getStreamer__REACT_HOT_LOADER__',
    value: function __getStreamer__REACT_HOT_LOADER__(streamer) {
      var _this2 = this;

      // Checks if the streamer already exists in the array.
      // If so,
      if (!this.state.streamers.some(function (_ref5) {
        var name = _ref5.name;
        return name.toLowerCase() === streamer;
      })) {
        this.setState({ fetching: true });

        var streamerFetch = makePromiseCancelable(this.fetchStreamer(streamer));

        this.streamerFetchs.push(streamerFetch);

        streamerFetch.promise.then(this.addStreamer).then(function () {
          _this2.setState({ fetching: false });
          _this2.refs.streamerForm.reset();
        }).catch(function () {
          console.log('Cancelled fetching streamer:', streamer);
        });
      } else {
        this.refs.streamerForm.reset();
      }
    }
  }, {
    key: '__fetchStreamer__REACT_HOT_LOADER__',
    value: function __fetchStreamer__REACT_HOT_LOADER__(streamer) {
      var api = function (streamer) {
        return function (url) {
          return fetch('https://api.twitch.tv/kraken/' + url + '/' + streamer, {
            headers: {
              'Client-ID': 'arswo3b5tabfew3rro46kc58vvnl4dk'
            }
          }).then(function (res) {
            return res.json();
          });
        };
      }(streamer);

      return Promise.all([api('channels'), api('streams')]);
    }
  }, {
    key: '__addStreamer__REACT_HOT_LOADER__',
    value: function __addStreamer__REACT_HOT_LOADER__(_ref6) {
      var _this3 = this;

      var _ref7 = _slicedToArray(_ref6, 2),
          channel = _ref7[0],
          stream = _ref7[1];

      this.setState(function (_ref8) {
        var streamers = _ref8.streamers;

        var _checkAccountStatus = _this3.checkAccountStatus(channel.message, channel.status),
            name = _checkAccountStatus.name,
            error = _checkAccountStatus.error;

        return {
          streamers: [{
            id: (0, _shortid.generate)(),
            logo: channel.logo || 'http://placehold.it/100x100',
            name: error ? name : channel.display_name,
            status: channel.status,
            online: !!stream.stream,
            error: error
          }].concat(_toConsumableArray(streamers))
        };
      });
    }
  }, {
    key: '__checkAccountStatus__REACT_HOT_LOADER__',
    value: function __checkAccountStatus__REACT_HOT_LOADER__(message, status) {
      var extractName = function extractName(message) {
        return message.match(/'(\w+)'/i)[1];
      };

      if (status === 422) {
        return {
          name: extractName(message),
          error: 'Account closed'
        };
      } else if (status === 404) {
        return {
          name: extractName(message),
          error: 'Account does not exist'
        };
      }

      return { error: false };
    }
  }, {
    key: '__deleteStreamer__REACT_HOT_LOADER__',
    value: function __deleteStreamer__REACT_HOT_LOADER__(id) {
      this.setState(function (_ref9) {
        var streamers = _ref9.streamers;
        return {
          streamers: streamers.filter(function (streamer) {
            return streamer.id !== id;
          })
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'section',
        { className: 'TwitchApp__wrapper' },
        _react2.default.createElement(
          'section',
          { className: 'TwitchApp' },
          _react2.default.createElement(
            'header',
            { className: 'TwitchApp__header' },
            _react2.default.createElement(
              'section',
              { className: 'TwitchApp__header__inputs' },
              _react2.default.createElement('input', {
                className: 'TwitchApp__header__inputs__search-input',
                placeholder: 'Search...',
                onChange: function onChange(ev) {
                  return _this4.setState({ searchString: ev.target.value });
                }
              }),
              _react2.default.createElement(
                'form',
                {
                  onSubmit: function onSubmit(ev) {
                    ev.preventDefault();
                    _this4.getStreamer(_this4.refs.streamerInput.value);
                  },
                  ref: 'streamerForm'
                },
                _react2.default.createElement('input', {
                  ref: 'streamerInput',
                  className: 'TwitchApp__header__inputs__new-streamer-input',
                  placeholder: 'Add a streamer...'
                })
              )
            ),
            _react2.default.createElement(Nav, {
              filter: this.state.filter,
              setFilter: function setFilter(filter) {
                return _this4.setState({ filter: filter });
              }
            }),
            this.state.fetching && _react2.default.createElement('div', { className: 'TwitchApp__header__loading' })
          ),
          _react2.default.createElement(StreamersBox, {
            filter: this.state.filter,
            searchString: this.state.searchString,
            streamers: this.state.streamers,
            deleteStreamer: this.deleteStreamer
          })
        ),
        _react2.default.createElement(_ProjectNotes2.default, {
          title: 'Twitch App',
          js: 'd6a55ccf2aca2b58bf4482fde79f65be',
          css: '2b18c58a41aae6c0df2a92a86255201d',
          titleLink: 'https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api',
          objective: 'Build an app that retrieves a list of twitch streamers and their status. It should be functionally similar to:  ',
          objectiveLink: 'https://codepen.io/FreeCodeCamp/full/Myvqmo/',
          userStories: ['I can see whether Free Code Camp is currently streaming on Twitch.tv.', 'I can click the status output and be sent directly to the Free Code Camp\'s Twitch.tv channel.', 'If a Twitch user is currently streaming, I can see additional details about what they are streaming.', 'I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.']
        })
      );
    }
  }]);

  return TwitchApp;
}(_react2.default.Component);

;

var _default = TwitchApp;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(makePromiseCancelable, 'makePromiseCancelable', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TwitchApp.js');

  __REACT_HOT_LOADER__.register(Nav, 'Nav', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TwitchApp.js');

  __REACT_HOT_LOADER__.register(StreamersBox, 'StreamersBox', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TwitchApp.js');

  __REACT_HOT_LOADER__.register(Streamer, 'Streamer', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TwitchApp.js');

  __REACT_HOT_LOADER__.register(TwitchApp, 'TwitchApp', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TwitchApp.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/components/TwitchApp.js');
}();

;