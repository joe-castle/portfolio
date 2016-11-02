import React from 'react';
import classNames from 'classnames';

import Button from './Button';

// TODO: Provide way for custom saved patterns using local storage. Provide dropdown to populate cells.
// TODO: Refactor checkneighbours?
// TODO: Story cells as an array with alive, old and an position/id. Rather than storing react objects in state.
// TODO: On mobile, enlarge square on hold to make it easier to select custome patterns
// TODO: Allow dragging to create patterns, rather than just click. Use a variable (componentdidmount) and mouseenter to siumulate drag
// TODO: Provide a way to share patterns, export & import

const checkNeighbours = (position, cells) => {
	let neighbours = 0, w = 70, l = cells.length;

  // Checks nodes in the top left corner
	if (position === 0) {
		if (cells[l-1].alive) neighbours +=1;
		if (cells[l-w].alive) neighbours +=1;
		if (cells[l-w+1].alive) neighbours +=1;
		if (cells[w-1].alive) neighbours +=1;
		if (cells[1].alive) neighbours +=1;
		if (cells[w*2-1].alive) neighbours +=1;
		if (cells[w].alive) neighbours +=1;
		if (cells[w+1].alive) neighbours +=1;
  // Checks nodes in the top right corner
	} else if (position === w-1) {
		if (cells[l-2].alive) neighbours +=1;
		if (cells[l-1].alive) neighbours +=1;
		if (cells[l-w].alive) neighbours +=1;
		if (cells[w-2].alive) neighbours +=1;
		if (cells[0].alive) neighbours +=1;
		if (cells[w*2-2].alive) neighbours +=1;
		if (cells[w*2-1].alive) neighbours +=1;
		if (cells[w].alive) neighbours +=1;
  // Checkes nodes in the bottom left corner
	} else if (position === l-w) {
		if (cells[l-w-1].alive) neighbours +=1;
		if (cells[position-w].alive) neighbours +=1;
		if (cells[position-w+1].alive) neighbours +=1;
		if (cells[l-1].alive) neighbours +=1;
		if (cells[position+1].alive) neighbours +=1;
		if (cells[w-1].alive) neighbours +=1;
		if (cells[0].alive) neighbours +=1;
		if (cells[1].alive) neighbours +=1;
  // Checks nodes in the bottom right corner
	} else if (position === l-1) {
		if (cells[l-w-2].alive) neighbours +=1;
		if (cells[l-w-1].alive) neighbours +=1;
		if (cells[l-w*2].alive) neighbours +=1;
		if (cells[l-2].alive) neighbours +=1;
		if (cells[l-w].alive) neighbours +=1;
		if (cells[w-2].alive) neighbours +=1;
		if (cells[w-1].alive) neighbours +=1;
		if (cells[0].alive) neighbours +=1;
  // Checks nodes in top row (excluding the corners)
	} else if (position >= 1 && position <= w-2) {
		if (cells[l-w+position].alive) neighbours +=1;
		if (cells[l-w-1+position].alive) neighbours +=1;
		if (cells[l-w+1+position].alive) neighbours +=1;
		if (cells[position-1].alive) neighbours +=1;
		if (cells[position+1].alive) neighbours +=1;
		if (cells[position+w+1].alive) neighbours +=1;
		if (cells[position+w].alive) neighbours +=1;
		if (cells[position+w-1].alive) neighbours +=1;
  // Checks nodes in bottom row (excluding corners)
	} else if (position >= l-w+1 && position <= l-2) {
		if (cells[position-w-1].alive) neighbours +=1;
		if (cells[position-w].alive) neighbours +=1;
		if (cells[position-w+1].alive) neighbours +=1;
		if (cells[position-1].alive) neighbours +=1;
		if (cells[position+1].alive) neighbours +=1;
		if (cells[w-(l-position)-1].alive) neighbours +=1;
		if (cells[w-(l-position)].alive) neighbours +=1;
		if (cells[w-(l-position)+1].alive) neighbours +=1;
  // Checks nodes in the left column (excluding corners)
	} else if (position % w === 0) {
		if (cells[position-1].alive) neighbours +=1;
		if (cells[position-w].alive) neighbours +=1;
		if (cells[position-w+1].alive) neighbours +=1;
		if (cells[position+w-1].alive) neighbours +=1;
		if (cells[position+1].alive) neighbours +=1;
		if (cells[position+w*2-1].alive) neighbours +=1;
		if (cells[position+w].alive) neighbours +=1;
		if (cells[position+w+1].alive) neighbours +=1;
  // Checks nodes in the right column (excluding corners)
	} else if (position % w === w-1) {
		if (cells[position-w-1].alive) neighbours +=1;
		if (cells[position-w].alive) neighbours +=1;
		if (cells[position-w*2+1].alive) neighbours +=1;
		if (cells[position-1].alive) neighbours +=1;
		if (cells[position-w+1].alive) neighbours +=1;
		if (cells[position+w-1].alive) neighbours +=1;
		if (cells[position+w].alive) neighbours +=1;
		if (cells[position+1].alive) neighbours +=1;
  // Checks all other nodes in the middle
	} else {
		if (cells[position-w-1].alive) neighbours +=1;
		if (cells[position-w].alive) neighbours +=1;
		if (cells[position-w+1].alive) neighbours +=1;
		if (cells[position-1].alive) neighbours +=1;
		if (cells[position+1].alive) neighbours +=1;
		if (cells[position+w-1].alive) neighbours +=1;
		if (cells[position+w].alive) neighbours +=1;
		if (cells[position+w+1].alive) neighbours +=1;
	}
	return neighbours;
}

class GameOfLife extends React.Component {
	constructor() {
		super();
		this.state = {
			cells: [],
			running: false,
			generation: 0,
			speed: 80,
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
     * Get custom patterns from storage after mount
     * to avoid issues with server rendering (no window object).
     */
    this.setState({
      customPatterns: Object.assign(this.state.customPatterns, this.getLocalStorage())
    });

    const grid = this.refs.grid;

    if (grid.getContext) {
      this.grid = grid.getContext('2d');

      grid.addEventListener('click', ev => {
        const rect = grid.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;

        let column = 0;
        let row = 0;

        const cellID = this.state.cells.find(cell => {
          const test = x >= column
            && x <= column + 12
            && y >= row
            && y <= row + 12;

          column += 12;

          if (column >= 840) {
            column = 0;
            row += 12;
          }

          return test;
        }).id;

        this.handleCellClick(cellID)
      });
    }

		this.setupCells('random');
		this.start();
	}

	componentWillUnmount() {
		this.clearTimer();
	}

  getLocalStorage = () => (
    JSON.parse(localStorage.getItem('fccGameOfLife'))
  )

  setLocalStorage = data => {
    localStorage.setItem('fccGameOfLife', JSON.stringify(data));
  }

	start = () => {
		const startFn = () => {
			if (this.checkAmountAlive() <= 0) {
				return this.clear();
			}

      const nextCells = this.changeCells();

			this.setState({
				cells: nextCells,
				generation: this.state.generation += 1
			});

      if (this.grid) {
        this.updateCanvasGrid(nextCells);
      }

			this.clearTimer();
			this.generationTimer = setTimeout(startFn, this.state.speed);
		};

		if (!this.state.running) {
			this.setState({ running: true });
			this.generationTimer = setTimeout(startFn, this.state.speed)
		}
	}

  pause = () => {
    this.setState({ running: false });
    this.clearTimer();
  }

  clear = () => {
    this.clearTimer();
    this.setupCells('allDead');
    this.setState({ running: false, generation: 0 });
  }

  reset = () => {
    console.log('Reset:', this.refs.patternSelector.value);
    this.clear();
    this.setupCells(this.refs.patternSelector.value || 'random')
  }

  updateCanvasGrid = cells => {
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

    cells.forEach(cell => {
      // Draw the cell
      this.grid.fillStyle = getFillStyle(cell);
      this.grid.fillRect(column, row, 12, 12);

      // Give the cell a border
      this.grid.strokeStyle = '#263238';
      this.grid.strokeRect(column, row, 12, 12);

      // Move to the next cell
      column += 12;

      // Move to the next row
      if (column >= 840) {
        column = 0;
        row += 12;
      }
    });
  }

	clearTimer = () => {
		clearTimeout(this.generationTimer);
	}

	changeBoardType = type => {
		this.clear();
		this.setupCells(type);
	}

	handleCellClick = id => {
    const nextCells = [
      ...this.state.cells.slice(0, id),
      this.createCellNode(id, !this.state.cells[id].alive),
      ...this.state.cells.slice(id + 1)
    ]

		this.setState({ cells: nextCells });

    if (this.grid) {
      this.updateCanvasGrid(nextCells)
    }
	}

	setupCells = type => {
		let nextCells = [], alive;

		for (let cell = 0, maxCells = 3500; cell < maxCells; cell++) {
			switch(type) {
				case 'allDead': alive = false; break;
				case 'random': alive = Math.random() <= 0.2; break;
				default: alive = this.state.customPatterns[type].some(match => cell === match); break;
			}

			nextCells.push(this.createCellNode(cell, alive));
		}

		this.setState({ cells: nextCells });

    if (this.grid) {
      this.updateCanvasGrid(nextCells);
    }
	}

	changeCells = () => {
    const cells = this.state.cells;
    let nextCells = [];

		for (let id = 0, totalCells = 3500; id < totalCells; id++) {
		  let aliveNeighbours = checkNeighbours(id, cells);

		  if (cells[id].alive) {
			 if (aliveNeighbours >= 4 || aliveNeighbours <= 1) {
				nextCells.push(this.createCellNode(id, false));
			 } else {
				nextCells.push(this.createCellNode(id, true, true));
			 }
		  } else if (aliveNeighbours === 3) {
			 nextCells.push(this.createCellNode(id, true));
		  } else {
			 nextCells.push(cells[id]);
		  }
		}

		return nextCells;
	}

	createCellNode = (id, alive, old = false) => ({
    id,
    alive,
    old,
	})

	checkAmountAlive = () => (
		this.state.cells.reduce((amountAlive, cell) => (cell.alive ? amountAlive + 1 : amountAlive), 0)
	)

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

	render() {
    return (
      <section className="GameOfLife">
        <h1 className="GameOfLife__generation">Generations: {this.state.generation}</h1>
        <canvas
          className="GameOfLife__grid"
          ref="grid"
          width={70 * 12}
          height={50 * 12}
          // onClick={ev => {
          //   console.log(ev)
          //   console.log(ev.target.clientX, ev.target.clientY);
          // }}
        >
          <section className="GameOfLife__grid">
            {this.grid ? null : this.state.cells.map(cell => (
              <section
            		id={cell.id}
            		onClick={() => this.handleCellClick(cell.id)}
            		className={classNames({
            			'GameOfLife__grid__cell': true,
            			'GameOfLife__grid__cell--dead': !cell.alive,
            			'GameOfLife__grid__cell--alive': cell.alive,
            			'GameOfLife__grid__cell--old': cell.old
            		})}
            	/>
            ))}
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
          <section className="GameOfLife__options__patterns">
            <select ref="patternSelector" onChange={ev => this.changeBoardType(ev.target.value)}>
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
          </section>
        </section>
      </section>
    );
  }
}

export default GameOfLife;
