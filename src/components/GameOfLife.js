import React from 'react';
import classNames from 'classnames';

// TODO: Provide way for custom saved patterns using local storage. Provide dropdown to populate cells.
// TODO: Refactor checkneighbours?
// TODO: Story cells as an array with alive, old and an position/id. Rather than storing react objects in state.
// TODO: On mobile, enlarge square on hold to make it easier to select custome patterns
// TODO: Allow dragging to create patterns, rather than just click. Use a variable (componentdidmount) and mouseenter to siumulate drag

const checkNeighbours = (position, cells) => {
	let neighbours = 0, w = 70, l = cells.length;

  // Checks nodes in the top left corner
	if (position === 0) {
		if (cells[l-1].props.alive) neighbours +=1;
		if (cells[l-w].props.alive) neighbours +=1;
		if (cells[l-w+1].props.alive) neighbours +=1;
		if (cells[w-1].props.alive) neighbours +=1;
		if (cells[1].props.alive) neighbours +=1;
		if (cells[w*2-1].props.alive) neighbours +=1;
		if (cells[w].props.alive) neighbours +=1;
		if (cells[w+1].props.alive) neighbours +=1;
  // Checks nodes in the top right corner
	} else if (position === w-1) {
		if (cells[l-2].props.alive) neighbours +=1;
		if (cells[l-1].props.alive) neighbours +=1;
		if (cells[l-w].props.alive) neighbours +=1;
		if (cells[w-2].props.alive) neighbours +=1;
		if (cells[0].props.alive) neighbours +=1;
		if (cells[w*2-2].props.alive) neighbours +=1;
		if (cells[w*2-1].props.alive) neighbours +=1;
		if (cells[w].props.alive) neighbours +=1;
  // Checkes nodes in the bottom left corner
	} else if (position === l-w) {
		if (cells[l-w-1].props.alive) neighbours +=1;
		if (cells[position-w].props.alive) neighbours +=1;
		if (cells[position-w+1].props.alive) neighbours +=1;
		if (cells[l-1].props.alive) neighbours +=1;
		if (cells[position+1].props.alive) neighbours +=1;
		if (cells[w-1].props.alive) neighbours +=1;
		if (cells[0].props.alive) neighbours +=1;
		if (cells[1].props.alive) neighbours +=1;
  // Checks nodes in the bottom right corner
	} else if (position === l-1) {
		if (cells[l-w-2].props.alive) neighbours +=1;
		if (cells[l-w-1].props.alive) neighbours +=1;
		if (cells[l-w*2].props.alive) neighbours +=1;
		if (cells[l-2].props.alive) neighbours +=1;
		if (cells[l-w].props.alive) neighbours +=1;
		if (cells[w-2].props.alive) neighbours +=1;
		if (cells[w-1].props.alive) neighbours +=1;
		if (cells[0].props.alive) neighbours +=1;
  // Checks nodes in top row (excluding the corners)
	} else if (position >= 1 && position <= w-2) {
		if (cells[l-w+position].props.alive) neighbours +=1;
		if (cells[l-w-1+position].props.alive) neighbours +=1;
		if (cells[l-w+1+position].props.alive) neighbours +=1;
		if (cells[position-1].props.alive) neighbours +=1;
		if (cells[position+1].props.alive) neighbours +=1;
		if (cells[position+w+1].props.alive) neighbours +=1;
		if (cells[position+w].props.alive) neighbours +=1;
		if (cells[position+w-1].props.alive) neighbours +=1;
  // Checks nodes in bottom row (excluding corners)
	} else if (position >= l-w+1 && position <= l-2) {
		if (cells[position-w-1].props.alive) neighbours +=1;
		if (cells[position-w].props.alive) neighbours +=1;
		if (cells[position-w+1].props.alive) neighbours +=1;
		if (cells[position-1].props.alive) neighbours +=1;
		if (cells[position+1].props.alive) neighbours +=1;
		if (cells[w-(l-position)-1].props.alive) neighbours +=1;
		if (cells[w-(l-position)].props.alive) neighbours +=1;
		if (cells[w-(l-position)+1].props.alive) neighbours +=1;
  // Checks nodes in the left column (excluding corners)
	} else if (position % w === 0) {
		if (cells[position-1].props.alive) neighbours +=1;
		if (cells[position-w].props.alive) neighbours +=1;
		if (cells[position-w+1].props.alive) neighbours +=1;
		if (cells[position+w-1].props.alive) neighbours +=1;
		if (cells[position+1].props.alive) neighbours +=1;
		if (cells[position+w*2-1].props.alive) neighbours +=1;
		if (cells[position+w].props.alive) neighbours +=1;
		if (cells[position+w+1].props.alive) neighbours +=1;
  // Checks nodes in the right column (excluding corners)
	} else if (position % w === w-1) {
		if (cells[position-w-1].props.alive) neighbours +=1;
		if (cells[position-w].props.alive) neighbours +=1;
		if (cells[position-w*2+1].props.alive) neighbours +=1;
		if (cells[position-1].props.alive) neighbours +=1;
		if (cells[position-w+1].props.alive) neighbours +=1;
		if (cells[position+w-1].props.alive) neighbours +=1;
		if (cells[position+w].props.alive) neighbours +=1;
		if (cells[position+1].props.alive) neighbours +=1;
  // Checks all other nodes in the middle
	} else {
		if (cells[position-w-1].props.alive) neighbours +=1;
		if (cells[position-w].props.alive) neighbours +=1;
		if (cells[position-w+1].props.alive) neighbours +=1;
		if (cells[position-1].props.alive) neighbours +=1;
		if (cells[position+1].props.alive) neighbours +=1;
		if (cells[position+w-1].props.alive) neighbours +=1;
		if (cells[position+w].props.alive) neighbours +=1;
		if (cells[position+w+1].props.alive) neighbours +=1;
	}
	return neighbours;
}

// Pre-made Life patterns
const gliderGun = (i) => [500, 501, 570, 571, 510, 580, 650, 721, 441, 372, 373, 792, 793, 445, 725, 516, 586, 656, 587, 584, 380, 381, 450, 451, 520, 521, 312, 592, 244, 314, 594, 664, 394, 395, 464, 465].some(x => x === i);

const switchEngine = (i) => [1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1423, 1424, 1425, 1426, 1427, 1431, 1432, 1433, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1448, 1449, 1450, 1451, 1452].some(x => x === i);

const pufferTrain = (i) => [906, 907, 908, 975, 976, 977, 978, 979, 1044, 1045, 1047, 1048, 1049, 1115, 1116, 1322, 1324, 1385, 1391, 1394, 1454, 1455, 1456, 1457, 1458, 1462, 1464, 1523, 1524, 1528, 1529, 1531, 1532, 1594, 1602, 1665, 1666, 1669, 1672, 1743, 1805, 1806, 1809, 1812, 1874, 1882, 1943, 1944, 1948, 1949, 1951, 1952, 2014, 2015, 2016, 2017, 2018, 2022, 2024, 2085, 2091, 2094, 2162, 2164, 2375, 2376, 2444, 2445, 2447, 2448, 2449, 2515, 2516, 2517, 2518, 2519, 2586, 2587, 2588].some(x => x === i);

// Components
const Cell = ({
	id,
	old,
	alive,
	handleClick
}) => (
	<div
		id={id}
		onClick={() => handleClick(id)}
		className={classNames({
			'GameOfLife__grid__cell': true,
			'GameOfLife__grid__cell--dead': !alive,
			'GameOfLife__grid__cell--alive': alive,
			'GameOfLife__grid__cell--old': old
		})}
	/>
);

class GameOfLife extends React.Component {
	constructor() {
		super();
		this.state = {
			cells: [],
			running: false,
			generation: 0,
			speed: 80
		};
	}

	componentDidMount() {
    const grid = this.refs.grid;

    if (grid.getContext) {
      this.grid = grid.getContext('2d');
    }

		this.setupCells();
		this.start();
	}

	componentWillUnmount() {
		this.clearTimer();
	}

	pause = () => {
		this.setState({ running: false });
		this.clearTimer();
	}

	start = () => {
		const startFn = () => {
			if (this.checkAmountAlive() <= 0) {
				return this.clear();
			}

			this.setState(({
				cells: this.changeCells(),
				generation: this.state.generation += 1
			}));

			this.clearTimer();
			this.generationTimer = setTimeout(startFn, this.state.speed);
		};

		if (!this.state.running) {
			this.setState({ running: true });
			this.generationTimer = setTimeout(startFn, this.state.speed)
		}
	}

	clear = () => {
		this.clearTimer();
		this.setupCells('all dead');
		this.setState({ running: false, generation: 0 });
	}

	clearTimer = () => {
		clearTimeout(this.generationTimer);
	}

	boardType = type => {
		this.clear();
		this.setupCells(type);
	}

	handleCellClick = id => {
		this.setState(state => ({
			cells: [
				...state.cells.slice(0, id),
				this.createCellNode(id, !state.cells[id].props.alive),
				...state.cells.slice(id + 1)
			]
		}));
	}

	setupCells = type => {
		let nextCells = [], alive;

		for (let i = 0, j = 3500; i < j; i++) {
			switch(type) {
				case 'all dead': alive = false; break;
				case 'glider gun': alive = gliderGun(i); break;
				case 'switch engine': alive = switchEngine(i); break;
				case 'puffer train': alive = pufferTrain(i); break;
				default: alive = Math.random() <= 0.2;
			}

			nextCells.push(this.createCellNode(i, alive));
		}

		this.setState({ cells: nextCells });
	}

	// aliveCellsId = () => {
	// 	alert(this.state.cells.filter((x, i) => (
	// 		x.props.alive
	// 	)).map(x => x.props.id))
	// }

	changeCells = () => {
		let nextCells = [], cells = this.state.cells;

		for (let id = 0, totalCells = 3500; id < totalCells; id++) {
		  let aliveNeighbours = checkNeighbours(id, cells);

		  if (cells[id].props.alive) {
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

	createCellNode = (id, alive, old = false) => (
		<Cell
			handleClick={this.handleCellClick}
			id={id}
			key={id}
			alive={alive}
			old={old}
		/>
	)

	checkAmountAlive = () => (
		this.state.cells.reduce((x, y) => {
			if (y.props.alive) {
        return x + 1
      }

			return x;
		}, 0)
	)

	render() {
    return (
      <div className="GameOfLife">
        <h1 className="GameOfLife__generation">Generations: {this.state.generation}</h1>
        <canvas ref="grid" className="GameOfLife__grid">
          <div className="GameOfLife__grid">
            {this.grid ? null : this.state.cells}
          </div>
        </canvas>
        <div className="GameOfLife__options">
          <input onClick={this.start} type="button" value="Run"/>
          <input onClick={this.pause} type="button" value="Pause"/>
          <input onClick={this.clear} type="button" value="Clear"/>
          <input onClick={() => this.setState({speed: 160})} type="button" value="Slow"/>
          <input onClick={() => this.setState({speed: 80})} type="button" value="Normal"/>
          <input onClick={() => this.setState({speed: 10})} type="button" value="Fast"/>
          {/*for setting up patterns
          <input onClick={this.aliveCellsId} type="button" value="Alive Cells"/>*/}
        </div>
        <div className="boardType">
          <input onClick={this.boardType} type="button" value="Random"/>
          <input onClick={this.boardType.bind(this, 'glider gun')} type="button" value="Glider Gun"/>
          <input onClick={this.boardType.bind(this, 'switch engine')} type="button" value="Switch Engine"/>
          <input onClick={this.boardType.bind(this, 'puffer train')} type="button" value="Puffer Train"/>
        </div>
      </div>
    );
  }
}

export default GameOfLife;
