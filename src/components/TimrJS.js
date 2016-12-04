import React from 'react';
import Timr from 'timrjs';
import { Link } from 'react-router';

import Code from './Code';
import Button from './Button';

class StartExample extends React.Component {
  constructor() {
    super();

    this.state = {
      output: '10:00',
      error: ''
    };
  }

  handleChange = ev => {
    try {
      this.setState({
        output: Timr(ev.target.value).formatTime(),
        error: '',
      });
    } catch (e) {
      this.setState({ error: e.toString() });
    }
  }

  render() {
    return (
      <section className="TimrJS__start-example">
        <section className="TimrJS__start-example__notes">
          <ul>
            <li><code>'10:00'</code> - Time units must be separated by a colon.</li>
            <li><code>600</code> - Equivalent to 10:00.</li>
            <li><code>'50'</code> - Unless a string contains a colon, a number is treated as seconds</li>
            <li><code>'25m'</code> - Shorthand for 25:00.</li>
            <li><code>'25h'</code> - Shorthand for 25:00:00.</li>
            <li><code>0</code> - Sets up a stopwatch rather than a coutdown.</li>
          </ul>
        </section>
        <p>If the provided startTime is invalid an error will be thrown. Times up to 999:59:59 are supported.</p>
        <section className="TimrJS__start-example__interactive">
          <Code>
            <span className="function">Timr</span>
            <span className="punctuation">(</span>
            <input
              onChange={this.handleChange}
              defaultValue="10:00"
            />
            <span className="punctuation">);</span>{'\n'}
            <span className="comment">// Formatted Output: </span>
            <span className="output">{this.state.output}</span>{'\n'}
          </Code>
          {this.state.error &&
            <div className="TimrJS__start-example__interactive__error">{this.state.error}</div>
          }
        </section>
      </section>
    );
  }
}

// FIXME: default value doesn't work properly when changing options.
class OptionsExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hourOutput: '02:00:00',
      minuteOutput: '20:00',
      secondOutput: '00:20',
      error: '',
    };
  }

  updateOutput = (option, optionValue) => {
    this.setState({
      hourOutput: Timr('02:00:00', { [option]: optionValue }).formatTime(),
      minuteOutput: Timr('20:00', { [option]: optionValue }).formatTime(),
      secondOutput: Timr('20', { [option]: optionValue }).formatTime(),
      error: '',
    });
  }

  getDefaultOption = () => (
    this.refs.option
      ? this.refs.option.value
      : 'outputFormat'
  )

  getDefaultOptionValue = option => {
    switch(option) {
      case 'outputFormat': return 'mm:ss';
      case 'formatType': return 'h';
      case 'separator': return ':';
    }
  }

  generateOptionValues = () => {
    const defaultOption = this.getDefaultOption();

    if (defaultOption === 'separator') {
      return (
        <input
          ref="optionValue"
          onChange={ev => this.updateOutput(
            this.refs.option.value,
            ev.target.value
          )}
          defaultValue=":"
        />
      )
    }

    return (
      <select
        ref="optionValue"
        onChange={ev => this.updateOutput(
          this.refs.option.value,
          ev.target.value
        )}
        defaultValue={this.getDefaultOptionValue(this.getDefaultOption())}
      >
        {
          [
            { outputFormat: ['hh:mm:ss', 'mm:ss', 'ss'] },
            { formatType: ['h', 'm', 's'] },
            { separator: [':', '-', '/'] }
          ]
            .filter(option => option.hasOwnProperty(defaultOption))[0][defaultOption]
            .map(optionValue => <option key={optionValue}>{optionValue}</option>)
        }
      </select>
    )
  }

  render() {
    return (
      <section className="TimrJS__options-example">
        <section className="TimrJS__options-example__notes">
          <ul>
            <li><code>outputFormat</code> - This option specifies how many 00 should be added to the front of the time string as it counts down from hours to minutes to seconds. Defaults to <code>'mm:ss'</code></li>
            <li><code>formatType</code> - This option specifies whether to format the time string up to hours, up to minutes or just seconds. Defaults to <code>'h'</code></li>
            <li><code>separator</code> - This option specifies how the time string is separated. Defaults to <code>':'</code></li>
          </ul>
        </section>
        <section className="TimrJS__options-example__interactive">
          <Code>
            <span className="function">Timr</span>
            <span className="punctuation">(</span>
            <span className="punctuation">'</span>
            <span className="string">20:00</span>
            <span className="punctuation">'</span>
            <span className="punctuation">{', { '}</span>
            <select
              ref="option"
              onChange={ev => this.updateOutput(
                ev.target.value,
                this.getDefaultOptionValue(ev.target.value)
              )}
            >
              <option>outputFormat</option>
              <option>formatType</option>
              <option>separator</option>
            </select>
            <span className="punctuation">: </span>
            {this.generateOptionValues()}
            <span className="punctuation"> });</span>{'\n'}
            <span className="comment">// Hour Example:   </span>
            <span className="output">{this.state.hourOutput}</span>{'\n'}
            <span className="comment">// Minute Example: </span>
            <span className="output">{this.state.minuteOutput}</span>{'\n'}
            <span className="comment">// Second Example: </span>
            <span className="output">{this.state.secondOutput}</span>
          </Code>
        </section>
      </section>
    );
  }
}

class TickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      countdownFormattedTime: '10:00',
      percentDone: '0',
      countdownCurrentTime: '600',
      startTime: '600',
      stopwatchFormattedTime: '00:00',
      stopwatchCurrentTime: '0',
    };
  }

  componentDidMount() {
    this.countdown = Timr(600)
      .ticker((countdownFormattedTime, percentDone, countdownCurrentTime, startTime) => {
        this.setState({
          countdownFormattedTime,
          percentDone,
          countdownCurrentTime,
          startTime,
        });
      });

    this.stopwatch = Timr(0)
      .ticker((stopwatchFormattedTime, stopwatchCurrentTime) => {
        this.setState({
          stopwatchFormattedTime,
          stopwatchCurrentTime
        });
      })
  }

  componentWillUnmount() {
    this.countdown.destroy();
    this.stopwatch.destroy();
  }

  start = () => {
    this.countdown.start();
    this.stopwatch.start();
  }

  pause = () => {
    this.countdown.pause();
    this.stopwatch.pause();
  }

  stop = () => {
    this.countdown.stop();
    this.stopwatch.stop();

    this.setState({
      countdownFormattedTime: '10:00',
      percentDone: '0',
      countdownCurrentTime: '600',
      startTime: '600',
      stopwatchFormattedTime: '00:00',
      stopwatchCurrentTime: '0',
    });
  }

  render() {
    return (
      <section className="TimrJS__ticker-example">
        <section className="TimrJS__ticker-example__notes">
          <ul>
            <li><code>formattedTime</code> - The current time formatted into a time string. Customisable with outputFormat, formatType and separator options.</li>
            <li><code>percentDone</code> - The elapsed time in percent. <em>Useful for making something like a progress bar.</em></li>
            <li><code>currentTime</code> - The current time in seconds.</li>
            <li><code>startTime</code> - The starting time in seconds.</li>
            <li><code>self</code> - The original Timr object.</li>
          </ul>
        </section>
        <section className="TimrJS__ticker-example__interactive">
          <section className="TimrJS__ticker-example__interactive__demo-buttons">
            <Button onClick={this.start}>Start</Button>
            <Button onClick={this.pause}>Pause</Button>
            <Button onClick={this.stop}>Stop</Button>
          </section>
          <Code>
            <span className="comment">{'/* \n'}
            {' * '}Tickers first call will be 1 second after the timer has started.{'\n'}
            {' * '}In our current example, the first call will emit '09:59'.{'\n'}
            {' *\n'}
            {' * '}To display the timers startTime before starting the timer, you can call{'\n'}
            {' * '}timer.formatTime() which will return, in this case, '10:00'.{'\n'}
            {' */ '}</span>{'\n'}
            timer.
            <span className="function">ticker</span>
            (
            <span className="punctuation">(</span>
            <span className="parameter">formattedTime</span>,
            <span className="parameter"> percentDone</span>,
            <span className="parameter"> currentTime</span>,
            <span className="parameter"> startTime</span>
            <span className="punctuation">)</span>
            <span className="arrow"> => </span>{'{\n'}
            <span className="comment">  // formattedTime: </span>
            <span className="output">{this.state.countdownFormattedTime}</span>{'\n'}
            <span className="comment">  // percentDone:   </span>
            <span className="output">{this.state.percentDone}</span>{'\n'}
            <span className="comment">  // currentTime:   </span>
            <span className="output">{this.state.countdownCurrentTime}</span>{'\n'}
            <span className="comment">  // startTime:     </span>
            <span className="output">{this.state.startTime}</span>{'\n'}
            })<span className="punctuation">;</span>{'\n\n'}
            <span className="comment">{'/* \n'}
            {' * '}If the Timr has been setup as a stopwatch, ticker will only be provided{'\n'}
            {' * '}with 3 arguments: formattedTime, currentTime and self.{'\n'}
            {' */ '}</span>{'\n'}
            <span className="function">Timr</span>
            <span className="punctuation">(</span>
            <span className="number">0</span>
            <span className="punctuation">)</span>
            .
            <span className="function">ticker</span>
            (<span className="punctuation">(</span>
            <span className="parameter">formattedTime</span>,
            <span className="parameter"> currentTime</span>
            <span className="punctuation">)</span>
            <span className="arrow"> => </span>{'{\n'}
            <span className="comment">  // formattedTime: </span>
            <span className="output">{this.state.stopwatchFormattedTime}</span>{'\n'}
            <span className="comment">  // currentTime:   </span>
            <span className="output">{this.state.stopwatchCurrentTime}</span>{'\n'}
            })<span className="punctuation">;</span>
          </Code>
        </section>
      </section>
    );
  }
}

class FinishExample extends React.Component {
  constructor() {
    super();

    this.state = {
      countdownFormattedTime: '00:05',
      countdownFinish: '',
      stopwatchFormattedTime: '999:59:55',
      stopwatchFinish: '',
    };
  }

  componentDidMount() {
    this.countdown = Timr(5)
      .ticker((countdownFormattedTime) => {
        this.setState({ countdownFormattedTime });
      })
      .finish(() => {
        this.setState({ countdownFinish: 'Countdown Finished!' });
      });

    this.stopwatch = Timr(0)
      .ticker((stopwatchFormattedTime, stopwatchCurrentTime) => {
        this.setState({ stopwatchFormattedTime });
      })
      .finish(() => {
        this.setState({ stopwatchFinish: 'Stopwatch Finished!' });
      })

    this.stopwatch.currentTime = 3599995;
  }

  componentWillUnmount() {
    this.countdown.destroy();
    this.stopwatch.destroy();
  }

  start = () => {
    this.countdown.start();
    this.stopwatch.start();
  }

  pause = () => {
    this.countdown.pause();
    this.stopwatch.pause();
  }

  stop = () => {
    this.countdown.stop();
    this.stopwatch.stop();
    this.stopwatch.currentTime = 3599995;

    this.setState({
      countdownFormattedTime: '00:05',
      countdownFinish: '',
      stopwatchFormattedTime: '999:59:55',
      stopwatchFinish: '',
    });
  }

  render() {
    return (
      <section className="TimrJS__ticker-example">
        <section className="TimrJS__ticker-example__notes">
          {this.props.children}
        </section>
        <section className="TimrJS__ticker-example__interactive">
          <section className="TimrJS__ticker-example__interactive__demo-buttons">
            <Button onClick={this.start}>Start</Button>
            <Button onClick={this.pause}>Pause</Button>
            <Button onClick={this.stop}>Stop</Button>
          </section>
          <Code>
            timer.
            <span className="function">finish</span>
            (
            <span className="punctuation">(</span>
            <span className="punctuation">)</span>
            <span className="arrow"> => </span>{'{\n'}
            <span className="comment">  // ticker: </span>
            <span className="output">{this.state.countdownFormattedTime}</span>{'\n'}
            <span className="comment">  // finish: </span>
            <span className="output">{this.state.countdownFinish}</span>{'\n'}
            })<span className="punctuation">;</span>{'\n\n'}
            <span className="comment">{'/* \n'}
            {' * '}If the Timr has been setup as a stopwatch, the timer will stop{'\n'}
            {' * '}and the finish function will fire when the time reaches the{'\n'}
            {' * '}maximum supported time of '999:59:59'.{'\n'}
            {' */ '}</span>{'\n'}
            <span className="function">Timr</span>
            <span className="punctuation">(</span>
            <span className="number">0</span>
            <span className="punctuation">)</span>
            .
            <span className="function">finish</span>
            (<span className="punctuation">(</span>
            <span className="punctuation">)</span>
            <span className="arrow"> => </span>{'{\n'}
            <span className="comment">  // ticker: </span>
            <span className="output">{this.state.stopwatchFormattedTime}</span>{'\n'}
            <span className="comment">  // finish: </span>
            <span className="output">{this.state.stopwatchFinish}</span>{'\n'}
            })<span className="punctuation">;</span>
          </Code>
        </section>
      </section>
    );
  }
}

class ControlExample extends React.Component {
  constructor() {
    super();

    this.state = {
      mainOutput: '00:05',
      delayOutput: '0s',
    };
  }

  componentDidMount() {
    this.timer = Timr(5).ticker(ft => this.setState({ mainOutput: ft }));
    this.delayTimer = Timr(5, { outputFormat: 'ss', formatType: 's' })
      .ticker(ft => this.setState({ delayOutput: `${ft}s` }))
  }

  componentWillUnmount() {
    this.timer.destroy();
    this.delayTimer.destroy();
  }

  handleChange = ev => {
    const delay = Number(ev.target.value);

    this.timer.stop();
    this.delayTimer.stop();
    this.setState({ mainOutput: '00:05' });

    if (delay / 1000 > 0) {
      try {
        this.delayTimer.setStartTime(Math.ceil(delay / 1000));
        this.setState({ delayOutput: `${delay / 1000}s` })
        this.delayTimer.start();
      } catch (e) {
        this.setState({ delayOutput: 'Invalid Syntax'})
        this.delayTimer.stop();
      }
    }

    this.timer.start(delay);
  }

  render() {
    return (
      <section className="TimrJS__ticker-example">
        <section className="TimrJS__ticker-example__notes">
          {this.props.children}
        </section>
        <section className="TimrJS__ticker-example__interactive">
          <Code>
            <span className="comment">{'/* \n'}
            {' * '}Start takes an optional number (in ms) argument that will{'\n'}
            {' * '}delay the start of the timer.{'\n'}
            {' */ '}</span>{'\n'}
            timer.
            <span className="function">start</span>
            <span className="punctuation">(</span>
            <input onChange={this.handleChange} placeholder="Delay..."/>
            <span className="punctuation">);</span>{'\n'}
            <span className="comment">// Delay:  </span>
            <span className="output">{this.state.delayOutput}</span>{'\n'}
            <span className="comment">// Output: </span>
            <span className="output">{this.state.mainOutput}</span>{'\n'}
            timer.
            <span className="function">pause</span>
            <span className="punctuation">(</span>
            <span className="punctuation">);</span>{'\n'}
            timer.
            <span className="function">stop</span>
            <span className="punctuation">(</span>
            <span className="punctuation">);</span>{'\n'}
          </Code>
        </section>
      </section>
    );
  }
}

class StoreExample extends React.Component {
  constructor() {
    super();

    this.state = {
      timer1: '20:00',
      timer2: '15:00',
      timer3: '10:00',
      timer4: '05:00',
    };
  }

  componentDidMount() {
    this.timer1 = Timr('20:00').ticker(ft => this.setState({ timer1: ft }));
    this.timer2 = Timr('15:00').ticker(ft => this.setState({ timer2: ft }));
    this.timer3 = Timr('10:00').ticker(ft => this.setState({ timer3: ft }));
    this.timer4 = Timr('05:00').ticker(ft => this.setState({ timer4: ft }));

    this.store1 = Timr.createStore(this.timer1, this.timer2);
    this.store2 = Timr.createStore(this.timer2, this.timer3, this.timer4);
  }

  componentWillUnmount() {
    this.store1.destroyAll();
    this.store2.destroyAll();
  }

  stop = store => {
    this[store].stopAll();

    this.setState({
      timer1: this.timer1.formatTime(),
      timer2: this.timer2.formatTime(),
      timer3: this.timer3.formatTime(),
      timer4: this.timer4.formatTime(),
    });
  }

  render() {
    return (
      <section className="TimrJS__ticker-example">
        <section className="TimrJS__ticker-example__interactive">
          <section className="TimrJS__ticker-example__interactive__demo-buttons">
            <h3>Store 1</h3>
            <Button onClick={() => this.store1.startAll()}>Start</Button>
            <Button onClick={() => this.store1.pauseAll()}>Pause</Button>
            <Button onClick={() => this.stop('store1')}>Stop</Button>
          </section>
          <section className="TimrJS__ticker-example__interactive__demo-buttons">
            <h3>Store 2</h3>
            <Button onClick={() => this.store2.startAll()}>Start</Button>
            <Button onClick={() => this.store2.pauseAll()}>Pause</Button>
            <Button onClick={() => this.stop('store2')}>Stop</Button>
          </section>
          <Code>
            <span className="storage">const </span>
            timer1
            <span className="punctuation"> = </span>
            <span className="function">Timr</span>
            <span className="punctuation">(</span>
            <span className="string">'20:00'</span>
            <span className="punctuation">);</span>{'\n'}
            <span className="comment">// </span>
            <span className="output">{this.state.timer1}</span>{'\n'}
            <span className="storage">const </span>
            timer2
            <span className="punctuation"> = </span>
            <span className="function">Timr</span>
            <span className="punctuation">(</span>
            <span className="string">'15:00'</span>
            <span className="punctuation">);</span>{'\n'}
            <span className="comment">// </span>
            <span className="output">{this.state.timer2}</span>{'\n'}
            <span className="storage">const </span>
            timer3
            <span className="punctuation"> = </span>
            <span className="function">Timr</span>
            <span className="punctuation">(</span>
            <span className="string">'10:00'</span>
            <span className="punctuation">);</span>{'\n'}
            <span className="comment">// </span>
            <span className="output">{this.state.timer3}</span>{'\n'}
            <span className="storage">const </span>
            timer4
            <span className="punctuation"> = </span>
            <span className="function">Timr</span>
            <span className="punctuation">(</span>
            <span className="string">'5:00'</span>
            <span className="punctuation">);</span>{'\n'}
            <span className="comment">// </span>
            <span className="output">{this.state.timer4}</span>{'\n\n'}
            <span className="storage">const </span>
            store1
            <span className="punctuation"> = </span>
            Timr.
            <span className="function">createStore</span>
            <span className="punctuation">(</span>
            timer1, timer2
            <span className="punctuation">);</span>{'\n'}
            <span className="storage">const </span>
            store2
            <span className="punctuation"> = </span>
            Timr.
            <span className="function">createStore</span>
            <span className="punctuation">([</span>
            timer2, timer3, timer4
            <span className="punctuation">]);</span>{'\n'}
            <span className="comment">// Because timer2 already exists in store1, it won't be added to store2.</span>
          </Code>
        </section>
      </section>
    );
  }
}

class UtilitiesExample extends React.Component {
  constructor() {
    super();

    this.state = {
      validate: '600',
      timeToSeconds: '600',
      correctFormat: 'true',
    };
  }

  handleChange = (fn, value) => {
    try {
      this.setState({ [fn]: Timr[fn](value).toString() });
    } catch (e) {
      this.setState({ [fn]: e.toString() });
    }
  }

  render() {
    return (
      <section className="TimrJS__ticker-example">
        <section className="TimrJS__ticker-example__interactive">
          <Code>
            <span className="comment">{'/*\n'}
            {' * '}FormatTime essentially takes the same arguments as{'\n'}
            {' * '}Timr instantiation, except it returns a string rather than{'\n'}
            {' * '}a Timr object. For example, see:{' '}
            <a href="#options">options</a>{'\n'}
            {' */\n\n'}</span>
            Timr.
            <span className="function">validate</span>
            <span className="punctuation">(</span>
            <input
              defaultValue="10:00"
              onChange={ev => this.handleChange('validate', ev.target.value)}
            />
            <span className="punctuation">);</span>{'\n'}
            <span className="comment">// </span>
            <span className="output">{this.state.validate}</span>{'\n'}
            Timr.
            <span className="function">timeToSeconds</span>
            <span className="punctuation">(</span>
            <input
              defaultValue="10:00"
              onChange={ev => this.handleChange('timeToSeconds', ev.target.value)}
            />
            <span className="punctuation">);</span>{'\n'}
            <span className="comment">// </span>
            <span className="output">{this.state.timeToSeconds}</span>{'\n'}
            Timr.
            <span className="function">correctFormat</span>
            <span className="punctuation">(</span>
            <input
              defaultValue="10:00"
              onChange={ev => this.handleChange('correctFormat', ev.target.value)}
            />
            <span className="punctuation">);</span>{'\n'}
            <span className="comment">// </span><span className="output">{this.state.correctFormat}</span>
          </Code>
        </section>
      </section>
    );
  }
}

class TimrJS extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '00:05',
    };
  }

  componentDidMount() {
    this.timer = Timr(5)
      .ticker(ft => this.setState({ title: ft }))
      .finish(() => setTimeout(() => this.setState({ title: 'TimrJS' }), 1000))
      .start();
  }

  componentWillUnmount() {
    this.timer.destroy();
  }

  render() {
    const { title } = this.state;

    return (
      <section className="TimrJS">
        <header className="TimrJS__header">
          <section className="TimrJS__header__container container">
            <Link className="TimrJS__header__projects-link" to="/projects">
              <i className="TimrJS__header__projects-link__icon material-icons">keyboard_arrow_left</i> projects
            </Link>
            <h1 className="TimrJS__header__title">{title}</h1>
            <h4>A simple, event driven, utility for creating timers in JavaScript.</h4>
            <Button
              color="blue"
              all
              className="TimrJS__header__github"
              onClick={() => window.open('https://github.com/joesmith100/timrjs')}
            >
              Github
            </Button>
          </section>
        </header>
        <section className="TimrJS__main container">
          <p>Compatible with Browsers and Node.js.</p>
          <p>The compiled versions also support RequireJS.</p>
          <h4>Interactive Examples</h4>
          <p>To help you better visualise how some of the functions and methods work, this page has a number of interactive examples. When you see a code block, text using <em className="TimrJS__main__output-example">this color</em> denotes the output from that example.</p>
          <h3>Installation</h3>
          <p>Install with npm or bower.</p>
          <Code>npm install --save timrjs</Code>
          <p>Alternatively, include the following CDN in your project:</p>
          <blockquote>
            <a
              href="https://cdn.jsdelivr.net/timrjs/latest/timr.js"
              target="_blank"
            >
              https://cdn.jsdelivr.net/timrjs/latest/timr.js
            </a>
            <a
              href="https://cdn.jsdelivr.net/timrjs/latest/timr.min.js"
              target="_blank"
            >
              https://cdn.jsdelivr.net/timrjs/latest/timr.min.js
            </a>
          </blockquote>
          <p>Or include <code>node_modules/dist/timr.min.js</code> on your page with a standalone <code>{'<script>'}</code> tag.</p>
          <p>Both of these will expose a single global method <code>Timr</code>. Alternatively, they will define a module if you are using RequireJS: <code>require(['Timr'])</code>.</p>
          <h3>Syntax</h3>
          <Code>
            <span className="function">Timr</span>
            <span className="punctuation">(</span>
            <span className="parameter">startTime</span>
            <span className="punctuation">[,</span>
            <span className="parameter"> options</span>
            <span className="punctuation">]);</span>
          </Code>
          <h4>Parameters</h4>
          <h5>startTime</h5>
          <p>Accepts a string or a number; a number is treated as seconds. Examples of accepted syntax:</p>
          <StartExample />
          <h5 id="options">options</h5>
          <p>Optional. Object which accepts:</p>
          <OptionsExample />
          <h3>Basic Usage</h3>
          <p>Import Timr into your project.</p>
          <Code>
            <span className="keyword">import </span>
            Timr
            <span className="keyword"> from </span>
            <span className="punctuation">'</span>
            <span className="string">timrjs</span>
            <span className="punctuation">';</span>
          </Code>
          <p>Start by calling the Timr function with the desired <code>startTime</code> and any <code>options</code>. This will return a new Timr Object.</p>
          <Code>
            <span className="storage">const </span>
            timer
            <span className="punctuation"> = </span>
            <span className="function">Timr</span>
            <span className="punctuation">('</span>
            <span className="string">10:00</span>
            <span className="punctuation">');</span>
          </Code>
          <p>Each Timr emits 2 events: <code>ticker</code> and <code>finish</code>.</p>
          <p>The <code>ticker</code> function is called every second the timer ticks down and is provided with the following arguments:</p>
          <TickerExample />
          <p>The <code>finish</code> method is called once, when the timer hits 0. Only 1 argument is provided into the function, the original Timr object.</p>
          <FinishExample />
          <p>To control the Timr, you use the <code>start</code>, <code>pause</code> and <code>start</code> methods.</p>
          <ControlExample />
          <p>All of the methods discussed thus for return a reference to the original Timr so calls can be chained. The same goes for the rest of the methods below, unless they specifically return a value, like, <code>timer.formatTime()</code></p>
          <h4>API</h4>
          <p>The following methods are available to all Timrs:</p>
          <ul>
            <li><code>start([delay])</code> - Starts the timer. Optionally delays starting by the provided ms.</li>
            <li><code>pause()</code> - Pauses the timer.</li>
            <li><code>stop()</code> - Stops the timer.</li>
            <li><code>destroy()</code> - Stops the timer, removes all event listeners and removes the timr from the store (if it's in one).</li>
            <li><code>ticker(fn)</code> - The provided function executes every second the timer ticks down.</li>
            <li><code>finish(fn)</code> - The provided function executes once the timer finishes.</li>
            <li><code>formatTime(['startTime'])</code> - Returns the currentTime, formatted. Optionally accepts the string 'startTime', which will return the startTime formatted.</li>
            <li><code>changeOptions(options)</code> - Merges the provided options into the existing ones. See: <a href="#options">options</a> for available options.</li>
            <li><code>setStartTime(newStartTime)</code> - Changes the startTime to the one provided and returns it formatted. Will stop the timer if its running. It's also subject to validation, so will throw an error if the provided time is invalid.</li>
            <li><code>getStartTime()</code> - Returns the startTime in seconds.</li>
            <li><code>getCurrentTime()</code> - Returns the currentTime in seconds.</li>
            <li><code>isRunning()</code> - Returns true if the timer is running, false otherwise.</li>
          </ul>
          <h3>Top Level API</h3>
          <h4>createStore</h4>
          <p>The createStore function provides a way to easily store multiple timrs together and perform various operations on all of them at the same time.</p>
          <p>It is available on the imported Timr Object.</p>
          <Code>
            <span className="keyword">const </span>
            store
            <span className="punctuation"> = </span>
            Timr.
            <span className="function">createStore</span>
            <span className="punctuation">();</span>
          </Code>
          <p>It also accepts Timr objects; these can be as separate arguments or together in an Array.</p>
          <p>If any non-Timr arguments are provided, they will be removed from the array. If a Timr object also exists in another store, they won't be added to a new one.</p>
          <StoreExample />
          <h5>API</h5>
          <p>When createStore is called, it will return an object with the following methods:</p>
          <ul>
            <li><code>add(timr)</code> - Adds the provided Timr to the store. If it already exits in a store, then it won't add it. Returns the provided Timr.</li>
            <li><code>getAll()</code> - Returns the array of all stored Timrs.</li>
            <li><code>startAll()</code> - Starts all stored Timrs.</li>
            <li><code>pauseAll()</code> - Pauses all stored Timrs.</li>
            <li><code>stopAll()</code> - Stops all stored Timrs.</li>
            <li><code>isRunning()</code> - Returns a new array of all stored Timrs that are running.</li>
            <li><code>removeFromStore(timr)</code> - Removes the provided Timr from the store.</li>
            <li><code>destroyAll()</code> - Destroys all stored Timrs.</li>
          </ul>
          <p>As you can see in the example above, each store is isolated, so methods run on one won't affect another.</p>
          <h4>Utilities</h4>
          <p>The following methods are available on the imported Timr object.</p>
          <ul>
            <li><code>Timr.validate(startTime)</code> - Validates the startTime and returns it converted into seconds.</li>
            <ul>
              <li>Ensures provided time is a number or a string.</li>
              <li>Ensures it is not a negative number.</li>
              <li>Checks validity of time string.</li>
              <li>Ensures provided time does not exceed '999:59:59'.</li>
            </ul>
            <li><code>Timr.formatTime(seconds, options)</code> - Converts seconds into a time string. Used by Timrs when outputting their formattedTime.</li>
            <ul>
              <li><code>seconds</code> - Required. The seconds to be converted.</li>
              <li><code>options</code> - See: <a href="#options">parameters > options</a></li>
            </ul>
            <li><code>Timr.timeToSeconds(time)</code> -  Converts a time string into seconds. Must be separated by a colon, e.g. '10:00'. Used in the validate method.</li>
            <li><code>Timr.correctFormat(time)</code> - Checks the format of a time string. Must be separated by a colon, e.g. '10:00'. Used in the validate method.</li>
          </ul>
          <UtilitiesExample />
          <h3>Bugs</h3>
          <p>This is my first contribution to the Open Source community so I fully expect there to be bugs.</p>
          <p>If you find any and fancy helping me out, <a href="https://github.com/joesmith100/timrjs/issues" target="_blank">create an issue</a>, or send a <a href="https://github.com/joesmith100/timrjs/pulls" target="_blank">pull request</a>.</p>
          <h3>License</h3>
          <p>MIT</p>
        </section>
      </section>
    );
  }
}

export default TimrJS
