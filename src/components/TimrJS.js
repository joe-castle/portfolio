// Have own page /timrjs
// Have the header be a coutdown before changing to TimrJS
// Loads of interactive examples
// Link to readme on github for FULL documentation / API

import React from 'react';
import Timr from 'timrjs';

class StartExample extends React.Component {
  constructor() {
    super();

    this.state = {
      output: '10:00',
    };
  }

  handleChange = ev => {
    try {
      this.setState({ output: Timr(ev.target.value).formatTime() })
    } catch (e) {
      this.setState({ output: e.toString() });
    }
  }

  render() {
    return (
      <section className="TimrJS__start-example">
        <section className="TimrJS__start-example__notes">
          {this.props.children}
        </section>
        <section className="TimrJS__start-example__interactive">
          <span className="TimrJS__start-example__interactive__demo-text">DEMO</span>
          <code className="TimrJS__start-example__interactive__demo">
            {'Timr('}
            <input
              onChange={this.handleChange}
              defaultValue={this.props.defaultValue}
            />
            {') '}
            <span>{this.state.output}</span>
          </code>
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
      output: '10:00',
    };
  }

  updateOutput = (startTime, option, optionValue) => {
    try {
      this.setState({
        output: Timr(startTime, { [option]: optionValue }).formatTime(),
      });
    } catch (e) {
      this.setState({ output: e.toString() });
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
      case 'formatType': return 'm';
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
            this.refs.startTime.value,
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
          this.refs.startTime.value,
          this.refs.option.value,
          ev.target.value
        )}
        defaultValue={this.getDefaultOptionValue(this.getDefaultOption())}
      >
        {
          [{ outputFormat: ['hh:mm:ss', 'mm:ss', 'ss']}, { formatType: ['h', 'm', 's']}, { separator: [':', '-', '/'] }]
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
          <span className="TimrJS__options-example__interactive__demo-text">DEMO</span>
          <code className="TimrJS__options-example__interactive__demo">
            {`Timr(`}
              <input
                ref="startTime"
                onChange={ev => this.updateOutput(
                  ev.target.value,
                  this.refs.option.value,
                  this.refs.optionValue.value
                )}
                defaultValue={this.state.output}
              />
            {`, { `}
            <select
              ref="option"
              onChange={ev => this.updateOutput(
                this.refs.startTime.value,
                ev.target.value,
                this.getDefaultOptionValue(ev.target.value)
              )}
            >
              <option>outputFormat</option>
              <option>formatType</option>
              <option>separator</option>
            </select>
            {': '}
            {this.generateOptionValues()}
            {' }) '}
            <span>{this.state.output}</span>
          </code>
        </section>
      </section>
    );
  }
}

class TickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      formattedTime: '10:00',
      percentDone: '0',
      currentTime: '600',
      startTime: '600',
    };
  }

  componentDidMount() {
    Timr(600)
      .ticker((formattedTime, percentDone, currentTime, startTime) => {
        this.setState({
          formattedTime,
          percentDone,
          currentTime,
          startTime,
        });
      })
      .start()
  }

  render() {
    return (
      <section className="TimrJS__ticker-example">
        <section className="TimrJS__ticker-example__notes">
          {this.props.children}
        </section>
        <section className="TimrJS__ticker-example__interactive">
          <span className="TimrJS__ticker-example__interactive__demo-text">DEMO</span>
          <pre>
            <code className="TimrJS__ticker-example__interactive__demo">
{`
timer.ticker((
  formattedTime,
  percentDone,
  currentTime,
  startTime
) => {
  console.log(formattedTime);
  // ${this.state.formattedTime}
  console.log(percentDone);
  // ${this.state.percentDone}
  console.log(currentTime);
  // ${this.state.currentTime}
  console.log(startTime);
  // ${this.state.startTime}
});`}
            </code>
          </pre>
        </section>
      </section>
    );
  }
}

// TODO: Code highlighting with atom sybtax
// TODO: nicer looking code background / formatting.
class TimrJS extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '00:05',
    };
  }

  componentDidMount() {
    Timr(5)
      .ticker(ft => this.setState({ title: ft }))
      .finish(() => setTimeout(() => this.setState({ title: 'TimrJS' }), 1000))
      .start();
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
          <p>The purpose of this page is to provide interactgive exmples, see github for full docs. m = minutes etc...</p>
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
          <pre><code>Timr(startTime[, option]]);</code></pre>
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
          <pre><code>import Timr from 'timrjs';</code></pre>
          <p>Create a Timr by calling the function with the desired <code>startTime</code> and any <code>options</code>. This will return a new Timr Object.</p>
          <pre><code>const timer = Timr('10:00');</code></pre>
          <p>Each Timr emits 2 events: <code>ticker</code> and <code>finish</code>.</p>
          <p>The <code>ticker</code> function is called every second the timer ticks down and is provided with the following arguments:</p>
          <TickerExample>
            <ul>
              <li><code>formattedTime</code> - The current time formatted into a time string. Customisable with outputFormat, formatType and separator options.</li>
              <li><code>percentDone</code> - The elapsed time in percent. <em>Useful for making progress bars etc.</em></li>
              <li><code>currentTime</code> - The current time in seconds.</li>
              <li><code>startTime</code> - The starting time in seconds.</li>
              <li><code>self</code> - The original Timr object.</li>
            </ul>
          </TickerExample>
        </section>
      </section>
    );
  }
}

export default TimrJS
