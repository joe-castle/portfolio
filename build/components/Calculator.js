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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
	_inherits(Calculator, _React$Component);

	function Calculator() {
		_classCallCheck(this, Calculator);

		var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this));

		_this.clear = function () {
			return _this.__clear__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.convertSymbols = function () {
			return _this.__convertSymbols__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.appendCalc = function () {
			return _this.__appendCalc__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.appendEntry = function () {
			return _this.__appendEntry__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.calculate = function () {
			return _this.__calculate__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.key = function () {
			return _this.__key__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.state = {
			entry: '',
			calc: []
		};
		return _this;
	}

	_createClass(Calculator, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			window.addEventListener('keyup', function (ev) {
				_this2.key(String.fromCharCode(ev.keyCode));
			});
		}
	}, {
		key: '__clear__REACT_HOT_LOADER__',
		value: function __clear__REACT_HOT_LOADER__(key) {
			key === 'AC' ? this.setState({ entry: '', calc: [] }) : this.setState({ entry: '' });
		}
	}, {
		key: '__convertSymbols__REACT_HOT_LOADER__',
		value: function __convertSymbols__REACT_HOT_LOADER__(key) {
			return key === '/' ? '÷' : key === '*' ? 'x' : key;
		}
	}, {
		key: '__appendCalc__REACT_HOT_LOADER__',
		value: function __appendCalc__REACT_HOT_LOADER__(key) {
			var _this3 = this;

			this.setState(function (state) {
				var _state = _this3.state,
				    entry = _state.entry,
				    calc = _state.calc;


				if (entry && calc.join('').length <= 24) {
					return {
						calc: [].concat(_toConsumableArray(calc), [entry, key]),
						entry: ''
					};
				}
				return state;
			});
		}
	}, {
		key: '__appendEntry__REACT_HOT_LOADER__',
		value: function __appendEntry__REACT_HOT_LOADER__(key) {
			var entry = this.state.entry;


			if (key === '.') {
				// Stops multiple . being added
				if (/\./g.test(entry)) {
					return;
				}
				// Prepends a 0 if the first key is a .
				if (!entry) {
					entry = '0.';
				} else {
					entry += key;
				}
				// Stops multiple 0's being added at the beginning of an entry.
			} else if (key === '0' && !entry) {
				return;
			} else {
				entry += key;
			}

			this.setState({ entry: entry });
		}
	}, {
		key: '__calculate__REACT_HOT_LOADER__',
		value: function __calculate__REACT_HOT_LOADER__() {
			var _state2 = this.state,
			    entry = _state2.entry,
			    calc = _state2.calc;

			calc = calc.slice();

			if (entry) {
				calc.push(entry);
			}

			if (/[\/\+\-\*]/g.test(calc[calc.length - 1])) {
				calc.pop();
			}

			this.setState({
				entry: eval(calc.join('')),
				calc: []
			});
		}
	}, {
		key: '__key__REACT_HOT_LOADER__',
		value: function __key__REACT_HOT_LOADER__(key) {
			switch (key) {
				case '1':case '2':case '3':case '4':case '5':
				case '6':case '7':case '8':case '9':case '0':
				case '.':
					this.appendEntry(key);break;
				case '=':
					this.calculate();break;
				case 'AC':case 'CE':
					this.clear(key);break;
				case '+':case '/':case '*':case '-':case '%':
					this.appendCalc(key);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(
				'section',
				{ className: 'Calculator__wrapper' },
				_react2.default.createElement(
					'section',
					{ className: 'Calculator' },
					_react2.default.createElement(
						'section',
						{ className: 'Calculator__window' },
						_react2.default.createElement(
							'span',
							{ className: 'Calculator__window__calc' },
							this.state.calc.map(this.convertSymbols).join(' ')
						),
						_react2.default.createElement(
							'span',
							{ className: 'Calculator__window__entry' },
							this.state.entry || 0
						)
					),
					_react2.default.createElement(
						'section',
						{ className: 'Calculator__keys' },
						['AC', 'CE', '+', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '=', '0', '.', '%'].map(function (key) {
							return _react2.default.createElement(
								'section',
								{
									key: key,
									onClick: function onClick() {
										return _this4.key(key);
									},
									className: (0, _classnames2.default)({
										'Calculator__keys__key': true,
										'Calculator__keys__key--equals': key === '='
									})
								},
								_this4.convertSymbols(key)
							);
						})
					)
				),
				_react2.default.createElement(_ProjectNotes2.default, {
					title: 'Calculator',
					js: '379844b642c4ebb593ac723923eff70b',
					css: '4b54b60efe209448f678425f8ba02370',
					titleLink: 'https://www.freecodecamp.com/challenges/build-a-javascript-calculator',
					objective: 'Build a working calculator. It should be functionally similar to: ',
					objectiveLink: 'https://codepen.io/FreeCodeCamp/full/rLJZrA/',
					userStories: ['I can add, subtract, multiply and divide two numbers.', 'I can clear the input field with a clear button.', 'I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.']
				})
			);
		}
	}]);

	return Calculator;
}(_react2.default.Component);

var _default = Calculator;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Calculator, 'Calculator', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Calculator.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/Web/portfolio/src/components/Calculator.js');
}();

;