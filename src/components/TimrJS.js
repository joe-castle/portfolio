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
    } catch(e) {
      this.setState({ output: 'Invalid Syntax' })
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

class OptionsExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: '10:00',
      output: '10:00',
    };
  }

  updateOutput = optionValue => {
    this.setState({
      output: Timr('10:00', { [this.refs.option.value]: optionValue }).formatTime(),
    });
  }

  getDefaultValue = option => {
    switch(option) {
      case 'outputFormat': return 'mm:ss';
      case 'formatType': return 'm';
      case 'separator': return ':';
    }
  }

  generateValueOptions = () => {
    const defaultOption = this.refs.option
      ? this.refs.option.value
      : 'outputFormat';

    return [{ outputFormat: ['hh:mm:ss', 'mm:ss', 'ss']}, { formatType: ['h', 'm', 's']}, { separator: [':', '-', '/'] }]
      .filter(option => option.hasOwnProperty(defaultOption))
      .map(option => option[defaultOption])[0]
      .map(optionValue => <option key={optionValue}>{optionValue}</option>)
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
                onChange={this.handleChange}
                defaultValue={this.state.output}
              />
            {`, { `}
            <select
              onChange={ev => this.updateOutput(this.getDefaultValue(ev.target.value))}
              ref="option"
            >
              <option>outputFormat</option>
              <option>formatType</option>
              <option>separator</option>
            </select>
            {': '}
            <select onChange={ev => this.updateOutput(ev.target.value)}>
              {this.generateValueOptions()}
            </select>
            {' }) '}
            <span>{this.state.output}</span>
          </code>
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
              <li><code>600</code> - Time units must be separated by a colon.</li>
              <li><code>'50'</code> - Time units must be separated by a colon.</li>
              <li><code>'25m'</code> - Shorthand for 25:00. Can be 25M.</li>
              <li><code>'25h'</code> - Shorthand for 25:00:00. Can be 25H.</li>
              <li><code>0</code> - Sets up a stopwatch style counter, counting up rather than down.</li>
            </ul>
          </StartExample>
          <h5>options</h5>
          <p>Optional. Object which accepts:</p>
          <OptionsExample>
            <ul>
              <li><code>outputFormat</code> - This option specifies how many 00 should be added to the front of the time string as it counts down from hours to minutes to seconds.</li>
              <li><code>formatType</code> - This option specifies whether to format the time string up to hours, up to minutes or just seconds.</li>
              <li><code>separator</code> - This option specifies how the time string is separated.</li>
            </ul>
          </OptionsExample>
        </section>
      </section>
    );
  }
}

export default TimrJS
