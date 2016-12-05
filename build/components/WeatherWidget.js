'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ProjectNotes = require('./ProjectNotes');

var _ProjectNotes2 = _interopRequireDefault(_ProjectNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function WeatherIcon(_ref) {
  var type = _ref.type;

  switch (type) {
    case 'Clouds':
      return _react2.default.createElement(
        'div',
        { className: 'icon' },
        _react2.default.createElement('div', { className: 'cloud' }),
        _react2.default.createElement('div', { className: 'cloud' })
      );
    case 'Rain':case 'Drizzle':
      return _react2.default.createElement(
        'div',
        { className: 'icon' },
        _react2.default.createElement('div', { className: 'cloud' }),
        _react2.default.createElement('div', { className: 'rain' })
      );
    case 'Thunderstorm':
      return _react2.default.createElement(
        'div',
        { className: 'icon' },
        _react2.default.createElement('div', { className: 'cloud' }),
        _react2.default.createElement(
          'div',
          { className: 'lightning' },
          _react2.default.createElement('div', { className: 'bolt' }),
          _react2.default.createElement('div', { className: 'bolt' })
        )
      );
    case 'Snow':
      return _react2.default.createElement(
        'div',
        { className: 'icon' },
        _react2.default.createElement('div', { className: 'cloud' }),
        _react2.default.createElement(
          'div',
          { className: 'snow' },
          _react2.default.createElement('div', { className: 'flake' }),
          _react2.default.createElement('div', { className: 'flake' })
        )
      );
    case 'Clear':default:
      return _react2.default.createElement(
        'div',
        { className: 'icon' },
        _react2.default.createElement(
          'div',
          { className: 'sun' },
          _react2.default.createElement('div', { className: 'rays' })
        )
      );
  }
};

var WeatherWidget = function (_React$Component) {
  _inherits(WeatherWidget, _React$Component);

  function WeatherWidget() {
    _classCallCheck(this, WeatherWidget);

    var _this = _possibleConstructorReturn(this, (WeatherWidget.__proto__ || Object.getPrototypeOf(WeatherWidget)).call(this));

    _this.getDay = function () {
      return _this.__getDay__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getCurrent = function () {
      return _this.__getCurrent__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getLocation = function () {
      return _this.__getLocation__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getWeather = function () {
      return _this.__getWeather__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.makeWeatherObject = function () {
      return _this.__makeWeatherObject__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      current: {},
      selectedDay: 'Today',
      forecast: [],
      location: 'Loading...'
    };
    return _this;
  }

  _createClass(WeatherWidget, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getLocation();
    }
  }, {
    key: '__getDay__REACT_HOT_LOADER__',
    value: function __getDay__REACT_HOT_LOADER__(unixTime) {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'][new Date(unixTime * 1000).getDay()];
    }
  }, {
    key: '__getCurrent__REACT_HOT_LOADER__',
    value: function __getCurrent__REACT_HOT_LOADER__(day, forecast) {
      return forecast.find(function (item) {
        return item.day === day;
      });
    }
  }, {
    key: '__getLocation__REACT_HOT_LOADER__',
    value: function __getLocation__REACT_HOT_LOADER__() {
      var _this2 = this;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
          _this2.getWeather('lat=' + pos.coords.latitude + '&lon=' + pos.coords.longitude);
        }, function () {
          _this2.getWeather('q=London');
        });
      } else {
        this.getWeather('q=London');
      }
    }
  }, {
    key: '__getWeather__REACT_HOT_LOADER__',
    value: function __getWeather__REACT_HOT_LOADER__(location) {
      var _this3 = this;

      var searchString = 'http://api.openweathermap.org/data/2.5/forecast?' + location + '&units=metric&appid=61573140cac722bdbfd9eb0b2f1a6b50';

      this.setState({ location: 'Loading...' });

      fetch(searchString).then(function (res) {
        return res.json();
      }).then(function (json) {
        var current = _this3.makeWeatherObject(json.list[0]);
        var forecast = json.list.reduce(function (prev, curr) {
          if (/12:00:00/ig.test(curr['dt_txt']) && _this3.getDay(curr.dt) !== _this3.getDay(Date.now() / 1000)) {
            prev.push(_this3.makeWeatherObject(curr));
          }

          return prev;
        }, [_this3.makeWeatherObject(json.list[0])]).slice(0, 5);

        _this3.setState({
          location: json.city.name + ', ' + json.city.country,
          current: _this3.getCurrent(_this3.state.selectedDay, forecast),
          forecast: forecast
        });
      }).catch(function (error) {
        _this3.setState({ location: 'Unable to find city' });
      });
    }
  }, {
    key: '__makeWeatherObject__REACT_HOT_LOADER__',
    value: function __makeWeatherObject__REACT_HOT_LOADER__(json) {
      return {
        day: this.getDay(json.dt) === this.getDay(Date.now() / 1000) ? 'Today' : this.getDay(json.dt),
        temp: Math.round(json.main.temp) + '\xB0C',
        type: json.weather[0].main,
        wind: Math.round(json.wind.speed) + ' m/s'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'section',
        { className: 'WeatherWidget__wrapper' },
        _react2.default.createElement(
          'section',
          { className: 'WeatherWidget' },
          _react2.default.createElement(
            'form',
            { onSubmit: function onSubmit(ev) {
                ev.preventDefault();
                _this4.getWeather('q=' + _this4.cityName.value);
                _this4.cityName.value = '';
              } },
            _react2.default.createElement('input', {
              ref: function ref(c) {
                _this4.cityName = c;
              },
              className: 'WeatherWidget__city-input',
              placeholder: 'Enter city name...'
            })
          ),
          _react2.default.createElement(
            'section',
            { className: 'WeatherWidget__forecast' },
            this.state.forecast.map(function (day) {
              return _react2.default.createElement(
                'section',
                {
                  key: day.day,
                  onClick: function onClick() {
                    return _this4.setState({
                      selectedDay: day.day,
                      current: _this4.getCurrent(day.day, _this4.state.forecast)
                    });
                  },
                  className: (0, _classnames2.default)({
                    WeatherWidget__forecast__days: true,
                    'WeatherWidget__forecast__days--active': _this4.state.selectedDay === day.day
                  })
                },
                _react2.default.createElement(
                  'span',
                  { className: 'WeatherWidget__forecast__days__day' },
                  day.day
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'WeatherWidget__forecast__days__temp' },
                  day.temp
                )
              );
            })
          ),
          _react2.default.createElement(
            'section',
            { className: 'WeatherWidget__current' },
            _react2.default.createElement(
              'section',
              { className: 'WeatherWidget__current__values' },
              _react2.default.createElement(
                'span',
                { className: 'WeatherWidget__current__day' },
                this.state.current.day
              ),
              _react2.default.createElement(
                'span',
                { className: 'WeatherWidget__current__location' },
                this.state.location
              ),
              _react2.default.createElement(
                'span',
                { className: 'WeatherWidget__current__temp' },
                this.state.current.temp
              )
            ),
            _react2.default.createElement(WeatherIcon, { type: this.state.current.type })
          )
        ),
        _react2.default.createElement(
          'p',
          { style: {
              margin: '10px 0 0 0',
              textAlign: 'center'
            } },
          'Weather icons courtesy of',
          ' ',
          _react2.default.createElement(
            'a',
            { href: 'http://codepen.io/joshbader/full/EjXgqr/' },
            'Josh Bader'
          ),
          '.'
        ),
        _react2.default.createElement(_ProjectNotes2.default, {
          title: 'Weather Widget',
          js: '1cceca2a506142161dc8e507ff68552e',
          css: '698959a7be55ca5a8faab78c7ec2af6e',
          titleLink: 'https://www.freecodecamp.com/challenges/show-the-local-weather',
          objective: 'Build an app that can show the weather of a given city. It should be functionally similar to: ',
          objectiveLink: 'http://codepen.io/FreeCodeCamp/full/bELRjV',
          userStories: ['I can see the weather in my current location.', 'I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.', 'I can push a button to toggle between Fahrenheit and Celsius.']
        })
      );
    }
  }]);

  return WeatherWidget;
}(_react2.default.Component);

var _default = WeatherWidget;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WeatherIcon, 'WeatherIcon', '/Users/Joe/Dropbox/Projects/portfolio/src/components/WeatherWidget.js');

  __REACT_HOT_LOADER__.register(WeatherWidget, 'WeatherWidget', '/Users/Joe/Dropbox/Projects/portfolio/src/components/WeatherWidget.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/components/WeatherWidget.js');
}();

;