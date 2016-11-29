import React from 'react';
import classNames from 'classnames';

import ProjectNotes from './ProjectNotes';
import Button from './Button';

// TODO: Look into the perfomance, it can be slow when manipulating the dom (Canvas fallback), also its stuttering after its running for a (unknown) period of time, perhaps reduce use of array functions?
// TODO: Make export a tiny link that can import patterns / improve export and import (currently turned off)

class GameOfLife extends React.Component {
	constructor() {
		super();

		this.state = {
      config: {
        width: 70,
        height: 50,
        totalCells: 3500,
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
        heart: [1146,1147,1148,1149,1150,1151,1159,1160,1161,1162,1163,1164,1215,1222,1228,1235,1284,1293,1297,1306,1353,1364,1366,1377,1422,1435,1448,1491,1519,1561,1589,1630,1660,1700,1730,1770,1800,1840,1870,1911,1939,1982,2008,2053,2077,2124,2146,2195,2215,2266,2284,2337,2353,2408,2422,2479,2491,2550,2560,2621,2629,2692,2698,2763,2767,2834,2836,2905],
      },
		};
	}

	componentDidMount() {
    /*
     * Perform functions that require window object here to avoid issues with server rendering
     */

    // Function to generate config which dictates height/width of grid based on window width.
    function makeConfig() {
      const windowWidth = window.innerWidth;
      let width;
      let height;

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
        width,
        height,
        totalCells: width * height,
      };
    }

    const config = makeConfig()

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
    const clearedCells = [];

    for (let cellID = 0, totalCells = config.totalCells; cellID < totalCells; cellID++) {
      clearedCells.push(this.createCellNode(cellID, false));
    }

    this.setState({
      clearedCells,
      config,
      customPatterns: Object.assign(this.state.customPatterns, this.getLocalStorage()),
    });

    const grid = this.refs.grid;

    if (grid.getContext) {
      this.grid = grid.getContext('2d');

      /**
       * The following provides the ability to drag the mouse to create a pattern,
       * rather than clicking individual cells.
       */
      let prevCellID;

      const moveListener = ev => {
        const currCellID = this.getCanvasClickedCellID(ev);

        if (currCellID === prevCellID) {
          return;
        }

        prevCellID = currCellID;

        this.handleCellClick(currCellID);
      };

      grid.addEventListener('mousedown', ev => {
        const cellID = this.getCanvasClickedCellID(ev);

        prevCellID = cellID;

        this.handleCellClick(cellID);

        // Drawing only works when game isnt running, to prevent lag.
        if (!this.state.running) {
          grid.addEventListener('mousemove', moveListener);
        }
      });

      window.addEventListener('mouseup', ev => {
        grid.removeEventListener('mousemove', moveListener);
      });
    }

    // Allows clearedCells array to be put into state before random cells are setup
    setTimeout(() => {
      this.setupCells('random');
    })
	}

	componentWillUnmount() {
		this.clearTimer();
	}

  checkNeighbours = position => {
    const cells = this.state.cells;
    const w = this.state.config.width;
    const l = cells.length;

  	let neighbours = 0;

    // Checks nodes in the top left corner
  	if (position === 0) {
  		if (cells[l - 1].alive) neighbours += 1;
  		if (cells[l - w].alive) neighbours += 1;
  		if (cells[l - w + 1].alive) neighbours += 1;
  		if (cells[w - 1].alive) neighbours += 1;
  		if (cells[1].alive) neighbours += 1;
  		if (cells[w * 2 - 1].alive) neighbours += 1;
  		if (cells[w].alive) neighbours += 1;
  		if (cells[w +1 ].alive) neighbours += 1;
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

  updateCanvasGrid = cells => {
    if (this.grid) {
      function getFillStyle(cell) {
        if (!cell.alive) {
          return '#37474f';
        }

        if (cell.old) {
          return '#1565c0';
        }

        if (cell.alive) {
          return '#29b6f6';
        }
      }

      let column = 0;
      let row = 0;

      for (let cell = 0; cell < this.state.config.totalCells; cell++) {
        // Draw the cell
        this.grid.fillStyle = getFillStyle(cells[cell]);
        this.grid.fillRect(column, row, 12, 12);

        // Give the cell a border
        this.grid.strokeStyle = '#263238';
        this.grid.strokeRect(column, row, 12, 12);

        // Move to the next cell
        column += 12;

        // Move to the next row
        if (column >= this.state.config.width * 12) {
          column = 0;
          row += 12;
        }
      }
    }
  }

  getCanvasClickedCellID = ev => {
    const rect = this.refs.grid.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    let column = 0;
    let row = 0;
    let cellID = 0;

    for (; cellID < this.state.config.totalCells; cellID++) {
      if ( x >= column
        && x <= column + 12
        && y >= row
        && y <= row + 12
      ) {
        return cellID;
      }

      column += 12;

      if (column >= this.state.config.width * 12) {
        column = 0;
        row += 12;
      }
    }
  }

  getLocalStorage = () => (
    JSON.parse(localStorage.getItem('fccGameOfLife'))
  )

  setLocalStorage = data => {
    localStorage.setItem('fccGameOfLife', JSON.stringify(data));
  }

	start = () => {
		if (!this.state.running) {
      const startFn = () => {
        // If all cells are dead, stop the game and reset generation.
        if (this.checkIfAllCellsDead()) {
          return this.clear();
        }

        const nextCells = this.changeCells();

        this.setState({
          cells: nextCells,
          generation: this.state.generation += 1
        });

        this.updateCanvasGrid(nextCells);

        this.clearTimer();
        this.generationTimer = setTimeout(startFn, this.state.speed);
      };

			this.setState({
        running: true,
        currentPattern: this.getPatternIDS(),
      });

			this.generationTimer = setTimeout(startFn, this.state.speed)
		}
	}

  pause = () => {
    this.setState({ running: false });
    this.clearTimer();
  }

  clear = () => {
    this.clearTimer();
    this.setState({
      cells: this.state.clearedCells,
      running: false,
      generation: 0,
    });
    this.updateCanvasGrid(this.state.clearedCells);
  }

  reset = () => {
    this.clear();
    this.setupCells(this.state.currentPattern);
  }

  clearTimer = () => {
    clearTimeout(this.generationTimer);
  }

	setupCells = pattern => {
		const nextCells = this.state.clearedCells.map(cell => (
      this.createCellNode(
        cell.id,
        pattern === 'random'
          ? Math.random() <= 0.2
          : pattern.some(id => id === cell.id)
      )
    ));

		this.setState({ cells: nextCells });

    this.updateCanvasGrid(nextCells);
	}

	changeCells = () => {
    const cells = this.state.cells;
    let nextCells = [];

		for (let cellID = 0; cellID < this.state.config.totalCells; cellID++) {
		  let aliveNeighbours = this.checkNeighbours(cellID);

		  if (cells[cellID].alive) {
			 if (aliveNeighbours >= 4 || aliveNeighbours <= 1) {
				nextCells.push(this.createCellNode(cellID, false));
			 } else {
				nextCells.push(this.createCellNode(cellID, true, true));
			 }
		  } else if (aliveNeighbours === 3) {
			 nextCells.push(this.createCellNode(cellID, true));
		  } else {
			 nextCells.push(cells[cellID]);
		  }
		}

		return nextCells;
	}

  checkIfAllCellsDead = () => {
    for (let cell = 0; cell < this.state.config.totalCells; cell++) {
      if (this.state.cells[cell].alive) {
        return;
      }
    }

    return true;
  }

  changeGridPattern = pattern => {
    this.clear();
    this.setupCells(
      typeof pattern === 'string'
        ? this.state.customPatterns[pattern]
        : pattern
    );
  }

	createCellNode = (id, alive, old = false) => ({
    id,
    alive,
    old,
	})

  getPatternIDS = () => (
  	this.state.cells
      .filter(cell => cell.alive)
      .map(cell => cell.id)
  )

  savePattern = () => {
    const newCustomPatterns = Object.assign(
      this.state.customPatterns, {
        [this.camelCase(this.refs.patternNameInput.value)]: this.getPatternIDS()
      }
    );

    this.setState({ customPatterns: newCustomPatterns});

    this.setLocalStorage(newCustomPatterns);

    this.refs.patternNameInput.value = '';
  }

  deletePattern = () => {
    const pattern = this.refs.patternSelector.value;
    const customPatterns = this.state.customPatterns
    const newCustomPatterns = {};

    if (pattern && confirm(`
      Are you sure you want to delete the pattern: "${this.unCamelCase(pattern)}"?
    `)) {
      for (let key in customPatterns) {
        if (pattern !== key) {
          newCustomPatterns[key] = customPatterns[key]
        }
      }

      this.setState({ customPatterns: newCustomPatterns })

      this.setLocalStorage(newCustomPatterns);
    }
  }

  importPattern = () => {
    const pattern = prompt('Please paste the pattern below and press ok.');

    if (pattern) {
      this.clear();
      this.changeGridPattern(JSON.parse(pattern));
    }
  }

  exportPattern = () => {
    alert(
      `Please copy the below:

      ${JSON.stringify(this.getPatternIDS())}`
    )
  }

  camelCase = text => (
    text
      .replace(/\s(.)/g, match => match.toUpperCase())
      .replace(/\s/g, '')
      .replace(/^(.)/, match => match.toLowerCase())
  )

  unCamelCase = text => (
    text
      .split(/(?=[A-Z])/g)
      .map(word => `${word[0].toUpperCase()}${word.substring(1)}`)
      .join(' ')
  )

  handleCellClick = cellID => {
    // Only runs if the click/drag is within the canvas borders
    if (cellID) {
      const nextCells = [
        ...this.state.cells.slice(0, cellID),
        this.createCellNode(cellID, this.state.drawMode === 'draw' || false),
        ...this.state.cells.slice(cellID + 1)
      ]

      this.setState({ cells: nextCells });

      this.updateCanvasGrid(nextCells)
    }
  }

  renderCanvasBackup = () => (
    this.state.cells.map(cell => (
      <section
        key={cell.id}
        id={cell.id}
        onClick={() => this.handleCellClick(cell.id)}
        className={classNames({
          'GameOfLife__grid__cell': true,
          'GameOfLife__grid__cell--dead': !cell.alive,
          'GameOfLife__grid__cell--alive': cell.alive,
          'GameOfLife__grid__cell--old': cell.old
        })}
      />
    ))
  )

	render() {
    return (
      <section>
        <section className="GameOfLife">
          <h1 className="GameOfLife__generation">Generations: {this.state.generation}</h1>
          <canvas
            className="GameOfLife__grid"
            ref="grid"
            width={this.state.config.width * 12}
            height={this.state.config.height * 12}
          >
            <section className="GameOfLife__grid GameOfLife__grid--canvas-backup">
              {this.grid ? null : this.renderCanvasBackup()}
            </section>
          </canvas>
          <section className="GameOfLife__options">
            <section className="GameOfLife__options__controls">
              <Button onClick={this.start} className="GameOfLife__options__controls__start">Start</Button>
              <Button onClick={this.pause} className="GameOfLife__options__controls__pause">Pause</Button>
              <Button onClick={this.reset} className="GameOfLife__options__controls__reset">Reset</Button>
              <Button onClick={this.clear} className="GameOfLife__options__controls__clear">Clear</Button>
              <label htmlFor="speed-input">
                <span className="title">Speed</span>
                <span className="speed">{`${this.state.speed}ms`}</span>
              </label>
              <div>
                <input
                  id="speed-input"
                  onChange={ev => this.setState({ speed: ev.target.value })}
                  value={this.state.speed}
                  min={10}
                  max={150}
                  type="range"
                />
              </div>
            </section>
            <section className="GameOfLife__options__draw">
              <i
                onClick={() => this.setState({ drawMode: 'draw' })}
                className={classNames({
                  'material-icons': true,
                  'GameOfLife__options__draw__mode': true,
                  'GameOfLife__options__draw__mode--active': this.state.drawMode === 'draw',
                })}
              >
                create
              </i>
              <i
                onClick={() => this.setState({ drawMode: 'erase' })}
                className={classNames({
                  'material-icons': true,
                  'GameOfLife__options__draw__mode': true,
                  'GameOfLife__options__draw__mode--active': this.state.drawMode === 'erase',
                })}
              >
                brightness_1
              </i>
            </section>
            <section className="GameOfLife__options__patterns">
              <select ref="patternSelector" onChange={ev => this.changeGridPattern(ev.target.value)}>
                <option value="" disabled selected>Please select a pattern</option>
                <option value="random">Random</option>
                {Object.keys(this.state.customPatterns).map(pattern => (
                  <option key={pattern} value={pattern}>{this.unCamelCase(pattern)}</option>
                ))}
              </select>
              <i
                onClick={this.deletePattern}
                className="material-icons GameOfLife__options__patterns__delete"
              >
                delete
              </i>
              <input
                className="GameOfLife__options__patterns__name-input"
                ref="patternNameInput"
                placeholder="Enter pattern name..."
              />
              <Button onClick={this.savePattern}>Save</Button>
              {/* <section className="GameOfLife__options__patterns__import-export">
                <Button onClick={this.importPattern}>Import</Button>
                <Button onClick={this.exportPattern}>Export</Button>
              </section> */}
            </section>
          </section>
        </section>
        <ProjectNotes
          title="Game of Life"
          codeHash="qbYWeq"
          titleLink="https://www.freecodecamp.com/challenges/build-the-game-of-life"
          objective="Build a working version of John Conway's Game of Life. It should be functionally similar to: "
          objectiveLink="https://codepen.io/FreeCodeCamp/full/reGdqx/"
          userStories={[
            'I can start and stop the board.',
            'I can set up the board.',
            'I can clear the board.',
            'When I press start, the game will play out.',
            'Each time the board changes, I can see how many generations have gone by.'
          ]}
        />
      </section>

    );
  }
}

export default GameOfLife;
