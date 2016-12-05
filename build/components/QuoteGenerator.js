'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ProjectNotes = require('./ProjectNotes');

var _ProjectNotes2 = _interopRequireDefault(_ProjectNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuoteGenerator = function (_React$Component) {
  _inherits(QuoteGenerator, _React$Component);

  function QuoteGenerator() {
    _classCallCheck(this, QuoteGenerator);

    var _this = _possibleConstructorReturn(this, (QuoteGenerator.__proto__ || Object.getPrototypeOf(QuoteGenerator)).call(this));

    _this.getNewQuote = function () {
      return _this.__getNewQuote__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      quote: {
        quote: 'No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.',
        author: 'Socrates'
      }
    };
    return _this;
  }

  _createClass(QuoteGenerator, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.livePreview || this.getNewQuote();
    }
  }, {
    key: '__getNewQuote__REACT_HOT_LOADER__',
    value: function __getNewQuote__REACT_HOT_LOADER__() {
      var _this2 = this;

      this.setState({ quote: '' });

      var headers = {
        'X-Mashape-Authorization': '9uCHJb0kOLmshQocAYgSEhkjt0ejp1CyPkOjsndRdVL5aBYHch'
      };

      fetch('https://andruxnet-random-famous-quotes.p.mashape.com/', { headers: headers }).then(function (res) {
        return res.json();
      }).then(function (quote) {
        _this2.setState({ quote: quote });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'section',
        { className: 'QuoteGenerator__Wrapper' },
        _react2.default.createElement(
          'section',
          { className: 'QuoteGenerator' },
          _react2.default.createElement(
            'section',
            { className: 'QuoteGenerator__actions' },
            _react2.default.createElement(
              _Button2.default,
              {
                color: 'green',
                onClick: this.getNewQuote,
                className: 'QuoteGenerator__actions__new-quote'
              },
              'New Quote'
            ),
            _react2.default.createElement(
              _Button2.default,
              {
                onClick: function onClick() {
                  return window.open('https://twitter.com/intent/tweet?text="' + _this3.state.quote.quote + '" - ' + _this3.state.quote.author);
                },
                color: 'blue',
                className: 'QuoteGenerator__actions__tweet'
              },
              'Tweet'
            )
          ),
          _react2.default.createElement(
            'article',
            { className: 'QuoteGenerator__quote' },
            this.state.quote ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                { className: 'QuoteGenerator__quote__text' },
                this.state.quote.quote
              ),
              _react2.default.createElement(
                'span',
                { className: 'QuoteGenerator__quote__author' },
                this.state.quote.author
              )
            ) : _react2.default.createElement(
              'div',
              { className: 'loader' },
              'Loading...'
            )
          )
        ),
        _react2.default.createElement(_ProjectNotes2.default, {
          title: 'Quote Generator',
          js: '77208ccb6b8867f89f7a754ccfbebcd0',
          css: '4e5ef65ebbaabe6fc10da1e41ee42139',
          titleLink: 'https://www.freecodecamp.com/challenges/build-a-random-quote-machine',
          objective: 'Build an app that randomly generates a quote. It should be functionally similar to: ',
          objectiveLink: 'https://codepen.io/FreeCodeCamp/full/ONjoLe/',
          userStories: ['I can click a button to show me a new random quote.', 'I can press a button to tweet out a quote.']
        })
      );
    }
  }]);

  return QuoteGenerator;
}(_react2.default.Component);

var _default = QuoteGenerator;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(QuoteGenerator, 'QuoteGenerator', '/Users/Joe/Dropbox/Projects/portfolio/src/components/QuoteGenerator.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/components/QuoteGenerator.js');
}();

;