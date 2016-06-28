import React from 'react';
import classNames from 'classnames';

class Calculator extends React.Component {
	constructor() {
		super();

		this.state = {
			entry: '',
			calc: [],
		};
	};

	componentDidMount() {
		window.addEventListener('keyup', ev => {
			this.key(String.fromCharCode(ev.keyCode));
		});
	}

	clear = key => {
		key === 'AC' ?
			this.setState({ entry: '', calc: [] }) :
			this.setState({ entry: '' });
	};

	convertSymbols = key => key === '/' ? '÷' : key === '*' ? 'x' : key;

	appendCalc = key => {
		this.setState(({ entry, calc }) => {
			if (entry && calc.join('').length <= 24) {
				return {
					calc: [
						...calc,
						entry,
						key
					],
					entry: '',
				};
			}
			return state;
		});
	};

	appendEntry = key => {
		let { entry } = this.state;

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
  } else if ((key === '0' && !entry)) {
			return;
		} else {
			entry += key;
		}

		this.setState({ entry });
	};

	calculate = () => {
		let { entry, calc } = this.state;
		calc = calc.slice();

		if (entry) {
			calc.push(entry);
		}

		if (/[\/\+\-\*]/g.test(calc[calc.length-1])) {
			calc.pop();
		}

		this.setState({
			entry: eval(calc.join('')),
			calc: []
		});
	};

	key = key => {
		switch(key) {
			case '1': case '2': case '3': case '4': case '5':
			case '6': case '7': case '8': case '9': case '0':
			case '.': this.appendEntry(key); break;
			case '=': this.calculate(); break;
			case 'AC': case 'CE': this.clear(key); break;
			case '+': case '/': case '*': case '-': case '%': this.appendCalc(key);
		}
	};

	render() {
    return (
      <section className='Calculator'>
        <section className='Calculator__window'>
          <span className='Calculator__window__calc'>
            {this.state.calc.map(this.convertSymbols).join(' ')}
          </span>
          <span className='Calculator__window__entry'>{this.state.entry || 0}</span>
        </section>
        <section className='Calculator__keys'>
          {[
            'AC', 'CE', '+', '/', '7', '8', '9', '*',
            '4', '5', '6', '-', '1', '2', '3', '=',
            '0', '.', '%'
          ].map(key => (
            <section
              key={key}
              onClick={() => this.key(key)}
              className={classNames({
                'Calculator__keys__key': true,
                'Calculator__keys__key--equals': key === '='
              })}
            >
              {this.convertSymbols(key)}
            </section>
          ))}
        </section>
      </section>
    );
  }
}

export default Calculator;
