// Have own page /timrjs
// Have the header be a coutdown before changing to TimrJS
// Loads of interactive examples
// Link to readme on github for FULL documentation / API

import React from 'react';
import Timr from 'timrjs';

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
          {this.props.children}
        </section>
        <section className="TimrJS__start-example__interactive">
          <pre>
            <code className="TimrJS__start-example__interactive__demo">
              <span className="function">Timr</span>
              <span className="punctuation">(</span>
              <input
                onChange={this.handleChange}
                defaultValue={this.props.defaultValue}
              />
              <span className="punctuation">);</span>{'\n'}
              <span className="comment">// </span>{this.state.output}{'\n'}
            </code>
          </pre>
          {this.state.error &&
            <div className="TimrJS__start-example__interactive__error">{this.state.error}</div>
          }
        </section>
      </section>
    );
  }
}

// FIXME: default value doesn't work properly when changing options.
// TODO: make it bettrer laid out for mobile
// TODO: use the full error text in a separate (red) banner?
// TODO: Add multiple outputs for comparison purposes
class OptionsExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hourOutput: '02:00:00',
      minuteOutput: '20:00',
      secondOutput: '20',
      error: '',
    };
  }

  updateOutput = (option, optionValue) => {
    try {
      this.setState({
        hourOutput: Timr('02:00:00', { [option]: optionValue }).formatTime(),
        minuteOutput: Timr('20:00', { [option]: optionValue }).formatTime(),
        secondOutput: Timr('20', { [option]: optionValue }).formatTime(),
        error: '',
      });
    } catch (e) {
      this.setState({ error: e.toString() });
    }
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
            { outputFormat: ['hh:mm:ss', 'mm:ss', 'ss']},
            { formatType: ['h', 'm', 's']},
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
          {this.props.children}
        </section>
        <section className="TimrJS__options-example__interactive">
          <pre>
            <code className="TimrJS__options-example__interactive__demo">
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
              <span className="comment">// </span>{this.state.hourOutput}{'\n'}
              <span className="comment">// </span>{this.state.minuteOutput}{'\n'}
              <span className="comment">// </span>{this.state.secondOutput}
            </code>
          </pre>
          {this.state.error &&
            <div className="TimrJS__start-example__interactive__error">{this.state.error}</div>
          }
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
          {this.props.children}
        </section>
        <section className="TimrJS__ticker-example__interactive">
          <section className="TimrJS__ticker-example__interactive__demo-buttons">
            <Button onClick={this.start}>Start</Button>
            <Button onClick={this.pause}>Pause</Button>
            <Button onClick={this.stop}>Stop</Button>
          </section>
          <pre>
            <code className="TimrJS__ticker-example__interactive__demo">
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
              <span className="console">  console</span>.
              <span className="function">log</span>
              <span className="punctuation">(</span>
              formattedTime
              <span className="punctuation">);</span>{'\n'}
              <span className="comment">  // </span>{this.state.countdownFormattedTime}{'\n'}
              <span className="console">  console</span>.
              <span className="function">log</span>
              <span className="punctuation">(</span>
              percentDone
              <span className="punctuation">);</span>{'\n'}
              <span className="comment">  // </span>{this.state.percentDone}{'\n'}
              <span className="console">  console</span>.
              <span className="function">log</span>
              <span className="punctuation">(</span>
              currentTime
              <span className="punctuation">);</span>{'\n'}
              <span className="comment">  // </span>{this.state.countdownCurrentTime}{'\n'}
              <span className="console">  console</span>.
              <span className="function">log</span>
              <span className="punctuation">(</span>
              startTime
              <span className="punctuation">);</span>{'\n'}
              <span className="comment">  // </span>{this.state.startTime}{'\n'}
              })<span className="punctuation">;</span>{'\n\n'}
              <span className="comment">{'/* \n'}
              {' * '}If the Timr has been setup as a stopwatch, ticker will only be provided{'\n'}
              {' * '}with 3 arguments.{'\n'}
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
              <span className="console">  console</span>.
              <span className="function">log</span>
              <span className="punctuation">(</span>
              formattedTime
              <span className="punctuation">);</span>{'\n'}
              <span className="comment">  // </span>{this.state.stopwatchFormattedTime}{'\n'}
              <span className="console">  console</span>.
              <span className="function">log</span>
              <span className="punctuation">(</span>
              currentTime
              <span className="punctuation">);</span>{'\n'}
              <span className="comment">  // </span>{this.state.stopwatchCurrentTime}{'\n'}
              })<span className="punctuation">;</span>
            </code>
          </pre>
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
      stopwatchFormattedTime: '999:59:55',
    };
  }

  componentDidMount() {
    this.countdown = Timr(5)
      .ticker((countdownFormattedTime) => {
        this.setState({ countdownFormattedTime });
      })
      .finish(() => {
        this.setState({ countdownFormattedTime: 'Countdown Finished!' });
      });

    this.stopwatch = Timr(0)
      .ticker((stopwatchFormattedTime, stopwatchCurrentTime) => {
        this.setState({ stopwatchFormattedTime });
      })
      .finish(() => {
        this.setState({ stopwatchFormattedTime: 'Stopwatch Finished!' });
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
      stopwatchFormattedTime: '999:59:55',
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
          <pre>
            <code className="TimrJS__ticker-example__interactive__demo">
              timer.
              <span className="function">finish</span>
              (
              <span className="punctuation">(</span>
              <span className="punctuation">)</span>
              <span className="arrow"> => </span>{'{\n'}
              <span className="console">  console</span>.
              <span className="function">log</span>
              <span className="punctuation">(</span>
              <span className="punctuation">'</span>
              <span className="string">Countdown Finished!</span>
              <span className="punctuation">'</span>
              <span className="punctuation">);</span>{'\n'}
              <span className="comment">  // </span>{this.state.countdownFormattedTime}{'\n'}
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
              <span className="console">  console</span>.
              <span className="function">log</span>
              <span className="punctuation">(</span>
                <span className="punctuation">'</span>
                <span className="string">Stopwatch Finished!</span>
                <span className="punctuation">'</span>
              <span className="punctuation">);</span>{'\n'}
              <span className="comment">  // </span>{this.state.stopwatchFormattedTime}{'\n'}
              })<span className="punctuation">;</span>
            </code>
          </pre>
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
        this.delayTimer.setStartTime(delay / 1000);
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
          <pre>
            <code className="TimrJS__ticker-example__interactive__demo">
              <span className="comment">{'/* \n'}
              {' * '}Start takes an optional number (in ms) argument that will{'\n'}
              {' * '}delay the start of the timer.{'\n'}
              {' */ '}</span>{'\n'}
              timer.
              <span className="function">start</span>
              <span className="punctuation">( </span>
              <input onChange={this.handleChange} placeholder="Delay..."/>
              <span className="punctuation"> );</span>{'\n'}
              <span className="comment"> // Delay: </span>{this.state.delayOutput}
              <span className="comment"> Output: </span>{this.state.mainOutput}{'\n'}
              timer.
              <span className="function">pause</span>
              <span className="punctuation">(</span>
              <span className="punctuation">);</span>{'\n'}
              timer.
              <span className="function">stop</span>
              <span className="punctuation">(</span>
              <span className="punctuation">);</span>{'\n'}
            </code>
          </pre>
        </section>
      </section>
    );
  }
}

// TODO: Code highlighting with atom sybtax
// TODO: nicer looking code background / formatting.
// TODO: at beginning - The purpose of this page is to provide interactgive exmples, see github for full docs.
// TODO: at beginning - Meaning of m = minutes etc...
// TODO: at beginning - How interactive examples work on the page
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
          <h1 className="TimrJS__header__title">{title}</h1>
        </header>
        <section className="TimrJS__main">
          <p>Timr is a simple, event driven utility for creating timers in JavaScript.</p>
          <p>Compatible with Browsers and Node.js.</p>
          <p>Additionally, the compiled versions support RequireJS.</p>
          <p></p>
          <h3>Installation</h3>
          <p>Install with npm or bower.</p>
          <pre><code>npm install --save timrjs</code></pre>
          <p>Alternatively, include the following CDN in your project:</p>
          <blockquote>
            <a href="https://cdn.jsdelivr.net/timrjs/latest/timr.js">
              https://cdn.jsdelivr.net/timrjs/latest/timr.js
            </a>
            <a href="https://cdn.jsdelivr.net/timrjs/latest/timr.min.js">
              https://cdn.jsdelivr.net/timrjs/latest/timr.min.js
            </a>
          </blockquote>
          <p>Or include <code>node_modules/dist/timr.min.js</code> on your page with a standalone <code>{'<script>'}</code> tag.</p>
          <p>Both of these will expose a single global method <code>Timr</code>. Alternatively, they will define a module if you are using RequireJS: <code>require(['Timr'])</code>.</p>
          <h3>Syntax</h3>
          <pre><code>Timr(startTime[, options]]);</code></pre>
          <h4>Parameters</h4>
          <h5>startTime</h5>
          <p>Accepts a string or a number; a number is treated as seconds. Examples of accepted syntax:</p>
          <StartExample defaultValue="10:00">
            <ul>
              <li><code>'10:00'</code> - Time units must be separated by a colon.</li>
              <li><code>600</code> - Equivalent to 10:00.</li>
              <li><code>'50'</code> - Unless a string contains a colon, a number is treated as seconds</li>
              <li><code>'25m'</code> - Shorthand for 25:00.</li>
              <li><code>'25h'</code> - Shorthand for 25:00:00.</li>
              <li><code>0</code> - Sets up a stopwatch rather than a coutdown.</li>
            </ul>
          </StartExample>
          <h5>options</h5>
          <p>Optional. Object which accepts:</p>
          <OptionsExample>
            <ul>
              <li><code>outputFormat</code> - This option specifies how many 00 should be added to the front of the time string as it counts down from hours to minutes to seconds.</li>
              <li><code>formatType</code> - This option specifies whether to format the time string up to hours, up to minutes or just seconds.</li>
              <li><code>separator</code> - This option specifies how the time string is separated.</li>
              <li><code>store</code> - Overrides the global store setting if provided. See: {/* TODO: add bookmark link here*/}store.</li>
            </ul>
          </OptionsExample>
          <h3>Basic Usage</h3>
          <p>Import Timr into your project.</p>
          <pre><code>
            <span className="keyword">import </span>
            Timr
            <span className="keyword"> from </span>
            <span className="punctuation">'</span>
            <span className="string">timrjs</span>
            <span className="punctuation">';</span>
          </code></pre>
          <p>Start by calling the Timr function with the desired <code>startTime</code> and any <code>options</code>. This will return a new Timr Object.</p>
          <pre><code>
            <span className="storage">const </span>
            timer
            <span className="punctuation"> = </span>
            <span className="function">Timr</span>
            <span className="punctuation">('</span>
            <span className="string">10:00</span>
            <span className="punctuation">');</span>
          </code></pre>
          <p>Each Timr emits 2 events: <code>ticker</code> and <code>finish</code>.</p>
          <p>The <code>ticker</code> function is called every second the timer ticks down and is provided with the following arguments:</p>
          <TickerExample>
            <ul>
              <li><code>formattedTime</code> - The current time formatted into a time string. Customisable with outputFormat, formatType and separator options.</li>
              <li><code>percentDone</code> - The elapsed time in percent. <em>Useful for making something like a progress bar</em></li>
              <li><code>currentTime</code> - The current time in seconds.</li>
              <li><code>startTime</code> - The starting time in seconds.</li>
              <li><code>self</code> - The original Timr object.</li>
            </ul>
          </TickerExample>
          <p>The <code>finish</code> method is called once, when the timer hits 0. Only 1 argument is provided into the function, the original Timr object.</p>
          <FinishExample />
          <p>To control the Timr, you use the <code>start</code>, <code>pause</code> and <code>start</code> methods.</p>
          <ControlExample />
        </section>
      </section>
    );
  }
}

export default TimrJS
