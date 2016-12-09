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

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: Look into the perfomance, it can be slow when manipulating the dom (Canvas fallback), also its stuttering after its running for a (unknown) period of time, perhaps reduce use of array functions?
// TODO: Make export a tiny link that can import patterns / improve export and import (currently turned off)

var GameOfLife = function (_React$Component) {
  _inherits(GameOfLife, _React$Component);

  function GameOfLife() {
    _classCallCheck(this, GameOfLife);

    var _this = _possibleConstructorReturn(this, (GameOfLife.__proto__ || Object.getPrototypeOf(GameOfLife)).call(this));

    _this.checkNeighbours = function () {
      return _this.__checkNeighbours__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.updateCanvasGrid = function () {
      return _this.__updateCanvasGrid__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getCanvasClickedCellID = function () {
      return _this.__getCanvasClickedCellID__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getLocalStorage = function () {
      return _this.__getLocalStorage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.setLocalStorage = function () {
      return _this.__setLocalStorage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.start = function () {
      return _this.__start__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.pause = function () {
      return _this.__pause__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.clear = function () {
      return _this.__clear__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.reset = function () {
      return _this.__reset__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.clearTimer = function () {
      return _this.__clearTimer__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.setupCells = function () {
      return _this.__setupCells__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.changeCells = function () {
      return _this.__changeCells__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.checkIfAllCellsDead = function () {
      return _this.__checkIfAllCellsDead__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.changeGridPattern = function () {
      return _this.__changeGridPattern__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.createCellNode = function () {
      return _this.__createCellNode__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getPatternIDS = function () {
      return _this.__getPatternIDS__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.savePattern = function () {
      return _this.__savePattern__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.deletePattern = function () {
      return _this.__deletePattern__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.importPattern = function () {
      return _this.__importPattern__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.exportPattern = function () {
      return _this.__exportPattern__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.camelCase = function () {
      return _this.__camelCase__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.unCamelCase = function () {
      return _this.__unCamelCase__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleCellClick = function () {
      return _this.__handleCellClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.renderCanvasBackup = function () {
      return _this.__renderCanvasBackup__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      config: {
        width: 70,
        height: 50,
        totalCells: 3500
      },
      cells: [],
      clearedCells: [],
      running: false,
      generation: 0,
      speed: 80,
      drawMode: 'draw',
      currentPattern: [],
      customPatterns: {
        gliderGun: [500, 501, 570, 571, 510, 580, 650, 721, 441, 372, 373, 792, 793, 445, 725, 516, 586, 656, 587, 584, 380, 381, 450, 451, 520, 521, 312, 592, 244, 314, 594, 664, 394, 395, 464, 465],
        switchEngine: [1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1423, 1424, 1425, 1426, 1427, 1431, 1432, 1433, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1448, 1449, 1450, 1451, 1452],
        pufferTrain: [906, 907, 908, 975, 976, 977, 978, 979, 1044, 1045, 1047, 1048, 1049, 1115, 1116, 1322, 1324, 1385, 1391, 1394, 1454, 1455, 1456, 1457, 1458, 1462, 1464, 1523, 1524, 1528, 1529, 1531, 1532, 1594, 1602, 1665, 1666, 1669, 1672, 1743, 1805, 1806, 1809, 1812, 1874, 1882, 1943, 1944, 1948, 1949, 1951, 1952, 2014, 2015, 2016, 2017, 2018, 2022, 2024, 2085, 2091, 2094, 2162, 2164, 2375, 2376, 2444, 2445, 2447, 2448, 2449, 2515, 2516, 2517, 2518, 2519, 2586, 2587, 2588],
        heart: [1146, 1147, 1148, 1149, 1150, 1151, 1159, 1160, 1161, 1162, 1163, 1164, 1215, 1222, 1228, 1235, 1284, 1293, 1297, 1306, 1353, 1364, 1366, 1377, 1422, 1435, 1448, 1491, 1519, 1561, 1589, 1630, 1660, 1700, 1730, 1770, 1800, 1840, 1870, 1911, 1939, 1982, 2008, 2053, 2077, 2124, 2146, 2195, 2215, 2266, 2284, 2337, 2353, 2408, 2422, 2479, 2491, 2550, 2560, 2621, 2629, 2692, 2698, 2763, 2767, 2834, 2836, 2905]
      }
    };
    return _this;
  }

  _createClass(GameOfLife, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      /*
       * Perform functions that require window object here to avoid issues with server rendering
       */

      // Function to generate config which dictates height/width of grid based on window width.
      function makeConfig() {
        var windowWidth = window.innerWidth;
        var width = void 0;
        var height = void 0;

        if (windowWidth < 768) {
          width = 30;
          height = 45;
        } else if (windowWidth < 1050) {
          width = 60;
          height = 40;
        } else {
          width = 70;
          height = 50;
        }

        return {
          width: width,
          height: height,
          totalCells: width * height
        };
      }

      var config = makeConfig();

      /**
       * FIXME: dynamically resizing canvas adds a whole host of problems
       *  - clearedCells array doesnt update with resize
       *  - using pause doesnt updat cells when scaling up
       *  - patterns in reset wont work when scaling down
       */
      // window.addEventListener('resize', () => {
      //   const { running } = this.state;
      //   const config = makeConfig();
      //
      //   if (config.width !== this.state.config.width) {
      //     this.clear();
      //
      //     this.setState({
      //       cells: this.setupCells('random'),
      //       config: makeConfig(),
      //     });
      //
      //     if (running) {
      //       this.start();
      //     }
      //   }
      // });

      // Setup a initial cells array for creating patterns.
      var clearedCells = [];

      var x = 0;
      var y = 0;

      for (var cellID = 0, totalCells = config.totalCells; cellID < totalCells; cellID++) {
        clearedCells.push(this.createCellNode(cellID, false, undefined, x, y));

        // Move to the next cell
        x += 12;

        // Move to the next row
        if (x >= config.width * 12) {
          x = 0;
          y += 12;
        }
      }

      this.setState({
        clearedCells: clearedCells,
        config: config,
        customPatterns: Object.assign(this.state.customPatterns, this.getLocalStorage())
      });

      var grid = this.refs.grid;

      if (grid.getContext) {
        (function () {
          _this2.grid = grid.getContext('2d');

          /**
           * The following provides the ability to drag the mouse to create a pattern,
           * rather than clicking individual cells.
           */
          var prevCellID = void 0;

          var moveListener = function moveListener(ev) {
            var currCellID = _this2.getCanvasClickedCellID(ev);

            if (currCellID === prevCellID) {
              return;
            }

            prevCellID = currCellID;

            _this2.handleCellClick(currCellID);
          };

          grid.addEventListener('mousedown', function (ev) {
            var cellID = _this2.getCanvasClickedCellID(ev);

            prevCellID = cellID;

            _this2.handleCellClick(cellID);

            // Drawing only works when game isnt running, to prevent lag.
            if (!_this2.state.running) {
              grid.addEventListener('mousemove', moveListener);
            }
          });

          window.addEventListener('mouseup', function (ev) {
            grid.removeEventListener('mousemove', moveListener);
          });
        })();
      }

      // Allows clearedCells array to be put into state before random cells are setup
      setTimeout(function () {
        _this2.setupCells('random');
        _this2.props.livePreview || _this2.start();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimer();
    }
  }, {
    key: '__checkNeighbours__REACT_HOT_LOADER__',
    value: function __checkNeighbours__REACT_HOT_LOADER__(position) {
      var cells = this.state.cells;
      var w = this.state.config.width;
      var l = cells.length;

      var neighbours = 0;

      // Checks nodes in the top left corner
      if (position === 0) {
        if (cells[l - 1].alive) neighbours += 1;
        if (cells[l - w].alive) neighbours += 1;
        if (cells[l - w + 1].alive) neighbours += 1;
        if (cells[w - 1].alive) neighbours += 1;
        if (cells[1].alive) neighbours += 1;
        if (cells[w * 2 - 1].alive) neighbours += 1;
        if (cells[w].alive) neighbours += 1;
        if (cells[w + 1].alive) neighbours += 1;
        // Checks nodes in the top right corner
      } else if (position === w - 1) {
        if (cells[l - 2].alive) neighbours += 1;
        if (cells[l - 1].alive) neighbours += 1;
        if (cells[l - w].alive) neighbours += 1;
        if (cells[w - 2].alive) neighbours += 1;
        if (cells[0].alive) neighbours += 1;
        if (cells[w * 2 - 2].alive) neighbours += 1;
        if (cells[w * 2 - 1].alive) neighbours += 1;
        if (cells[w].alive) neighbours += 1;
        // Checkes nodes in the bottom left corner
      } else if (position === l - w) {
        if (cells[l - w - 1].alive) neighbours += 1;
        if (cells[position - w].alive) neighbours += 1;
        if (cells[position - w + 1].alive) neighbours += 1;
        if (cells[l - 1].alive) neighbours += 1;
        if (cells[position + 1].alive) neighbours += 1;
        if (cells[w - 1].alive) neighbours += 1;
        if (cells[0].alive) neighbours += 1;
        if (cells[1].alive) neighbours += 1;
        // Checks nodes in the bottom right corner
      } else if (position === l - 1) {
        if (cells[l - w - 2].alive) neighbours += 1;
        if (cells[l - w - 1].alive) neighbours += 1;
        if (cells[l - w * 2].alive) neighbours += 1;
        if (cells[l - 2].alive) neighbours += 1;
        if (cells[l - w].alive) neighbours += 1;
        if (cells[w - 2].alive) neighbours += 1;
        if (cells[w - 1].alive) neighbours += 1;
        if (cells[0].alive) neighbours += 1;
        // Checks nodes in top row (excluding the corners)
      } else if (position >= 1 && position <= w - 2) {
        if (cells[l - w + position].alive) neighbours += 1;
        if (cells[l - w - 1 + position].alive) neighbours += 1;
        if (cells[l - w + 1 + position].alive) neighbours += 1;
        if (cells[position - 1].alive) neighbours += 1;
        if (cells[position + 1].alive) neighbours += 1;
        if (cells[position + w + 1].alive) neighbours += 1;
        if (cells[position + w].alive) neighbours += 1;
        if (cells[position + w - 1].alive) neighbours += 1;
        // Checks nodes in bottom row (excluding corners)
      } else if (position >= l - w + 1 && position <= l - 2) {
        if (cells[position - w - 1].alive) neighbours += 1;
        if (cells[position - w].alive) neighbours += 1;
        if (cells[position - w + 1].alive) neighbours += 1;
        if (cells[position - 1].alive) neighbours += 1;
        if (cells[position + 1].alive) neighbours += 1;
        if (cells[w - (l - position) - 1].alive) neighbours += 1;
        if (cells[w - (l - position)].alive) neighbours += 1;
        if (cells[w - (l - position) + 1].alive) neighbours += 1;
        // Checks nodes in the left column (excluding corners)
      } else if (position % w === 0) {
        if (cells[position - 1].alive) neighbours += 1;
        if (cells[position - w].alive) neighbours += 1;
        if (cells[position - w + 1].alive) neighbours += 1;
        if (cells[position + w - 1].alive) neighbours += 1;
        if (cells[position + 1].alive) neighbours += 1;
        if (cells[position + w * 2 - 1].alive) neighbours += 1;
        if (cells[position + w].alive) neighbours += 1;
        if (cells[position + w + 1].alive) neighbours += 1;
        // Checks nodes in the right column (excluding corners)
      } else if (position % w === w - 1) {
        if (cells[position - w - 1].alive) neighbours += 1;
        if (cells[position - w].alive) neighbours += 1;
        if (cells[position - w * 2 + 1].alive) neighbours += 1;
        if (cells[position - 1].alive) neighbours += 1;
        if (cells[position - w + 1].alive) neighbours += 1;
        if (cells[position + w - 1].alive) neighbours += 1;
        if (cells[position + w].alive) neighbours += 1;
        if (cells[position + 1].alive) neighbours += 1;
        // Checks all other nodes in the middle
      } else {
        if (cells[position - w - 1].alive) neighbours += 1;
        if (cells[position - w].alive) neighbours += 1;
        if (cells[position - w + 1].alive) neighbours += 1;
        if (cells[position - 1].alive) neighbours += 1;
        if (cells[position + 1].alive) neighbours += 1;
        if (cells[position + w - 1].alive) neighbours += 1;
        if (cells[position + w].alive) neighbours += 1;
        if (cells[position + w + 1].alive) neighbours += 1;
      }
      return neighbours;
    }
  }, {
    key: '__updateCanvasGrid__REACT_HOT_LOADER__',
    value: function __updateCanvasGrid__REACT_HOT_LOADER__(cells) {
      if (this.grid) {
        var getFillStyle = function getFillStyle(cell) {
          if (!cell.alive) {
            return '#37474f';
          }

          if (cell.old) {
            return '#1565c0';
          }

          if (cell.alive) {
            return '#29b6f6';
          }
        };

        for (var cell = 0, length = cells.length; cell < length; cell++) {
          var x = cells[cell].x;
          var y = cells[cell].y;

          // Draw the cell
          this.grid.fillStyle = getFillStyle(cells[cell]);
          this.grid.fillRect(x, y, 12, 12);

          // Give the cell a border
          this.grid.strokeStyle = '#263238';
          this.grid.strokeRect(x, y, 12, 12);
        }
      }
    }
  }, {
    key: '__getCanvasClickedCellID__REACT_HOT_LOADER__',
    value: function __getCanvasClickedCellID__REACT_HOT_LOADER__(ev) {
      var rect = this.refs.grid.getBoundingClientRect();
      var x = ev.clientX - rect.left;
      var y = ev.clientY - rect.top;

      var column = 0;
      var row = 0;
      var cellID = 0;

      for (var length = this.state.config.totalCells; cellID < length; cellID++) {
        if (x >= column && x <= column + 12 && y >= row && y <= row + 12) {
          return cellID;
        }

        column += 12;

        if (column >= this.state.config.width * 12) {
          column = 0;
          row += 12;
        }
      }
    }
  }, {
    key: '__getLocalStorage__REACT_HOT_LOADER__',
    value: function __getLocalStorage__REACT_HOT_LOADER__() {
      return JSON.parse(localStorage.getItem('fccGameOfLife'));
    }
  }, {
    key: '__setLocalStorage__REACT_HOT_LOADER__',
    value: function __setLocalStorage__REACT_HOT_LOADER__(data) {
      localStorage.setItem('fccGameOfLife', JSON.stringify(data));
    }
  }, {
    key: '__start__REACT_HOT_LOADER__',
    value: function __start__REACT_HOT_LOADER__() {
      var _this3 = this;

      if (!this.state.running) {
        (function () {
          var startFn = function startFn() {
            // If all cells are dead, stop the game and reset generation.
            if (_this3.checkIfAllCellsDead()) {
              return _this3.clear();
            }

            var _changeCells = _this3.changeCells(),
                nextCells = _changeCells.nextCells,
                changedCells = _changeCells.changedCells;

            _this3.setState({
              cells: nextCells,
              generation: _this3.state.generation += 1
            });

            _this3.updateCanvasGrid(changedCells);

            _this3.clearTimer();
            _this3.generationTimer = setTimeout(startFn, _this3.state.speed);
          };

          _this3.setState({
            running: true,
            currentPattern: _this3.getPatternIDS()
          });

          _this3.generationTimer = setTimeout(startFn, _this3.state.speed);
        })();
      }
    }
  }, {
    key: '__pause__REACT_HOT_LOADER__',
    value: function __pause__REACT_HOT_LOADER__() {
      this.setState({ running: false });
      this.clearTimer();
    }
  }, {
    key: '__clear__REACT_HOT_LOADER__',
    value: function __clear__REACT_HOT_LOADER__() {
      this.clearTimer();
      this.setState({
        cells: this.state.clearedCells,
        running: false,
        generation: 0
      });
      this.updateCanvasGrid(this.state.clearedCells);
    }
  }, {
    key: '__reset__REACT_HOT_LOADER__',
    value: function __reset__REACT_HOT_LOADER__() {
      this.clear();
      this.setupCells(this.state.currentPattern);
    }
  }, {
    key: '__clearTimer__REACT_HOT_LOADER__',
    value: function __clearTimer__REACT_HOT_LOADER__() {
      clearTimeout(this.generationTimer);
    }
  }, {
    key: '__setupCells__REACT_HOT_LOADER__',
    value: function __setupCells__REACT_HOT_LOADER__(pattern) {
      var _this4 = this;

      var nextCells = this.state.clearedCells.map(function (cell) {
        return _this4.createCellNode(cell.id, pattern === 'random' ? Math.random() <= 0.2 : pattern.some(function (id) {
          return id === cell.id;
        }));
      });

      this.setState({ cells: nextCells });

      this.updateCanvasGrid(nextCells);
    }
  }, {
    key: '__changeCells__REACT_HOT_LOADER__',
    value: function __changeCells__REACT_HOT_LOADER__() {
      var cells = this.state.cells;
      var nextCells = [];
      var changedCells = [];

      for (var cellID = 0, length = this.state.config.totalCells; cellID < length; cellID++) {
        var aliveNeighbours = this.checkNeighbours(cellID);

        if (cells[cellID].alive) {
          if (aliveNeighbours >= 4 || aliveNeighbours <= 1) {
            var cell = this.createCellNode(cellID, false);
            nextCells.push(cell);
            changedCells.push(cell);
          } else {
            var _cell = this.createCellNode(cellID, true, true);
            nextCells.push(_cell);
            changedCells.push(_cell);
          }
        } else if (aliveNeighbours === 3) {
          var _cell2 = this.createCellNode(cellID, true);
          nextCells.push(_cell2);
          changedCells.push(_cell2);
        } else {
          nextCells.push(cells[cellID]);
        }
      }

      return { nextCells: nextCells, changedCells: changedCells };
    }
  }, {
    key: '__checkIfAllCellsDead__REACT_HOT_LOADER__',
    value: function __checkIfAllCellsDead__REACT_HOT_LOADER__() {
      for (var cell = 0, length = this.state.config.totalCells; cell < length; cell++) {
        if (this.state.cells[cell].alive) {
          return;
        }
      }

      return true;
    }
  }, {
    key: '__changeGridPattern__REACT_HOT_LOADER__',
    value: function __changeGridPattern__REACT_HOT_LOADER__(pattern) {
      this.clear();
      this.setupCells(typeof pattern === 'string' ? this.state.customPatterns[pattern] : pattern);
    }
  }, {
    key: '__createCellNode__REACT_HOT_LOADER__',
    value: function __createCellNode__REACT_HOT_LOADER__(id, alive) {
      var old = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var x = arguments[3];
      var y = arguments[4];

      x = x !== undefined ? x : this.state.clearedCells[id].x;
      y = y !== undefined ? y : this.state.clearedCells[id].y;

      return {
        id: id,
        alive: alive,
        old: old,
        x: x,
        y: y
      };
    }
  }, {
    key: '__getPatternIDS__REACT_HOT_LOADER__',
    value: function __getPatternIDS__REACT_HOT_LOADER__() {
      return this.state.cells.filter(function (cell) {
        return cell.alive;
      }).map(function (cell) {
        return cell.id;
      });
    }
  }, {
    key: '__savePattern__REACT_HOT_LOADER__',
    value: function __savePattern__REACT_HOT_LOADER__() {
      var newCustomPatterns = Object.assign(this.state.customPatterns, _defineProperty({}, this.camelCase(this.refs.patternNameInput.value), this.getPatternIDS()));

      this.setState({ customPatterns: newCustomPatterns });

      this.setLocalStorage(newCustomPatterns);

      this.refs.patternNameInput.value = '';
    }
  }, {
    key: '__deletePattern__REACT_HOT_LOADER__',
    value: function __deletePattern__REACT_HOT_LOADER__() {
      var pattern = this.refs.patternSelector.value;
      var customPatterns = this.state.customPatterns;
      var newCustomPatterns = {};

      if (pattern && confirm('\n      Are you sure you want to delete the pattern: "' + this.unCamelCase(pattern) + '"?\n    ')) {
        for (var key in customPatterns) {
          if (pattern !== key) {
            newCustomPatterns[key] = customPatterns[key];
          }
        }

        this.setState({ customPatterns: newCustomPatterns });

        this.setLocalStorage(newCustomPatterns);
      }
    }
  }, {
    key: '__importPattern__REACT_HOT_LOADER__',
    value: function __importPattern__REACT_HOT_LOADER__() {
      var pattern = prompt('Please paste the pattern below and press ok.');

      if (pattern) {
        this.clear();
        this.changeGridPattern(JSON.parse(pattern));
      }
    }
  }, {
    key: '__exportPattern__REACT_HOT_LOADER__',
    value: function __exportPattern__REACT_HOT_LOADER__() {
      alert('Please copy the below:\n\n      ' + JSON.stringify(this.getPatternIDS()));
    }
  }, {
    key: '__camelCase__REACT_HOT_LOADER__',
    value: function __camelCase__REACT_HOT_LOADER__(text) {
      return text.replace(/\s(.)/g, function (match) {
        return match.toUpperCase();
      }).replace(/\s/g, '').replace(/^(.)/, function (match) {
        return match.toLowerCase();
      });
    }
  }, {
    key: '__unCamelCase__REACT_HOT_LOADER__',
    value: function __unCamelCase__REACT_HOT_LOADER__(text) {
      return text.split(/(?=[A-Z])/g).map(function (word) {
        return '' + word[0].toUpperCase() + word.substring(1);
      }).join(' ');
    }
  }, {
    key: '__handleCellClick__REACT_HOT_LOADER__',
    value: function __handleCellClick__REACT_HOT_LOADER__(cellID) {
      // Only runs if the click/drag is within the canvas borders
      if (cellID) {
        var cell = this.createCellNode(cellID, this.state.drawMode === 'draw' || false);
        var nextCells = [].concat(_toConsumableArray(this.state.cells.slice(0, cellID)), [cell], _toConsumableArray(this.state.cells.slice(cellID + 1)));

        this.setState({ cells: nextCells });

        this.updateCanvasGrid([cell]);
      }
    }
  }, {
    key: '__renderCanvasBackup__REACT_HOT_LOADER__',
    value: function __renderCanvasBackup__REACT_HOT_LOADER__() {
      var _this5 = this;

      return this.state.cells.map(function (cell) {
        return _react2.default.createElement('section', {
          key: cell.id,
          id: cell.id,
          onClick: function onClick() {
            return _this5.handleCellClick(cell.id);
          },
          className: (0, _classnames2.default)({
            'GameOfLife__grid__cell': true,
            'GameOfLife__grid__cell--dead': !cell.alive,
            'GameOfLife__grid__cell--alive': cell.alive,
            'GameOfLife__grid__cell--old': cell.old
          })
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'section',
          { className: 'GameOfLife' },
          _react2.default.createElement(
            'h1',
            { className: 'GameOfLife__generation' },
            'Generations: ',
            this.state.generation
          ),
          _react2.default.createElement(
            'canvas',
            {
              className: 'GameOfLife__grid',
              ref: 'grid',
              width: this.state.config.width * 12,
              height: this.state.config.height * 12
            },
            _react2.default.createElement(
              'section',
              { className: 'GameOfLife__grid GameOfLife__grid--canvas-backup' },
              this.grid ? null : this.renderCanvasBackup()
            )
          ),
          _react2.default.createElement(
            'section',
            { className: 'GameOfLife__options' },
            _react2.default.createElement(
              'section',
              { className: 'GameOfLife__options__controls' },
              _react2.default.createElement(
                _Button2.default,
                { onClick: this.start, className: 'GameOfLife__options__controls__start' },
                'Start'
              ),
              _react2.default.createElement(
                _Button2.default,
                { onClick: this.pause, className: 'GameOfLife__options__controls__pause' },
                'Pause'
              ),
              _react2.default.createElement(
                _Button2.default,
                { onClick: this.reset, className: 'GameOfLife__options__controls__reset' },
                'Reset'
              ),
              _react2.default.createElement(
                _Button2.default,
                { onClick: this.clear, className: 'GameOfLife__options__controls__clear' },
                'Clear'
              ),
              _react2.default.createElement(
                'label',
                { htmlFor: 'speed-input' },
                _react2.default.createElement(
                  'span',
                  { className: 'title' },
                  'Speed'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'speed' },
                  this.state.speed + 'ms'
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', {
                  id: 'speed-input',
                  onChange: function onChange(ev) {
                    return _this6.setState({ speed: ev.target.value });
                  },
                  value: this.state.speed,
                  min: 10,
                  max: 150,
                  type: 'range'
                })
              )
            ),
            _react2.default.createElement(
              'section',
              { className: 'GameOfLife__options__draw' },
              _react2.default.createElement(
                'i',
                {
                  onClick: function onClick() {
                    return _this6.setState({ drawMode: 'draw' });
                  },
                  className: (0, _classnames2.default)({
                    'material-icons': true,
                    'GameOfLife__options__draw__mode': true,
                    'GameOfLife__options__draw__mode--active': this.state.drawMode === 'draw'
                  })
                },
                'create'
              ),
              _react2.default.createElement(
                'i',
                {
                  onClick: function onClick() {
                    return _this6.setState({ drawMode: 'erase' });
                  },
                  className: (0, _classnames2.default)({
                    'material-icons': true,
                    'GameOfLife__options__draw__mode': true,
                    'GameOfLife__options__draw__mode--active': this.state.drawMode === 'erase'
                  })
                },
                'brightness_1'
              )
            ),
            _react2.default.createElement(
              'section',
              { className: 'GameOfLife__options__patterns' },
              _react2.default.createElement(
                'select',
                { ref: 'patternSelector', onChange: function onChange(ev) {
                    return _this6.changeGridPattern(ev.target.value);
                  } },
                _react2.default.createElement(
                  'option',
                  { value: '', disabled: true, selected: true },
                  'Please select a pattern'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'random' },
                  'Random'
                ),
                Object.keys(this.state.customPatterns).map(function (pattern) {
                  return _react2.default.createElement(
                    'option',
                    { key: pattern, value: pattern },
                    _this6.unCamelCase(pattern)
                  );
                })
              ),
              _react2.default.createElement(
                'i',
                {
                  onClick: this.deletePattern,
                  className: 'material-icons GameOfLife__options__patterns__delete'
                },
                'delete'
              ),
              _react2.default.createElement('input', {
                className: 'GameOfLife__options__patterns__name-input',
                ref: 'patternNameInput',
                placeholder: 'Enter pattern name...'
              }),
              _react2.default.createElement(
                _Button2.default,
                { onClick: this.savePattern },
                'Save'
              )
            )
          )
        ),
        _react2.default.createElement(_ProjectNotes2.default, {
          title: 'Game of Life',
          js: 'abdf881648a7528e5c0dbf9574cda692',
          css: '40e5b740742fec49259b55dd230658df',
          titleLink: 'https://www.freecodecamp.com/challenges/build-the-game-of-life',
          objective: 'Build a working version of John Conway\'s Game of Life. It should be functionally similar to: ',
          objectiveLink: 'https://codepen.io/FreeCodeCamp/full/reGdqx/',
          userStories: ['I can start and stop the board.', 'I can set up the board.', 'I can clear the board.', 'When I press start, the game will play out.', 'Each time the board changes, I can see how many generations have gone by.']
        })
      );
    }
  }]);

  return GameOfLife;
}(_react2.default.Component);

var _default = GameOfLife;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GameOfLife, 'GameOfLife', '/Users/Joe/Dropbox/Projects/portfolio/src/components/GameOfLife.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Joe/Dropbox/Projects/portfolio/src/components/GameOfLife.js');
}();

;