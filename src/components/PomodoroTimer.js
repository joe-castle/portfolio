import React from 'react';
import Timr from 'timrjs';
import classNames from 'classnames';

import ProjectNotes from './ProjectNotes';

// TODO: Better hover animation for clicking, and a call to action to make
// it clear that clicking starts the timer.
function RangeInput({ time, changeFn, session }) {
  return (
    <section className={`PomodoroTimer__input PomodoroTimer__input--${session}`}>
      <section className="PomodoroTimer__input__wrapper">
        <label htmlFor={`${session}-label`}>
          <span className="session-name">{`${session}`}</span>
          <span className="time">{Timr.formatTime(Timr.validate(`${time}m`))}</span>
        </label>
        <div>
          <input
            onChange={ev => changeFn(ev.target.value)}
            value={time}
            type='range' min='1' max='120'
            name={`${session}-label`}
          />
        </div>
      </section>
    </section>
  );
}

class PomodoroTimer extends React.Component {
  constructor() {
    super();

    this.state = {
      sessionTime: 25,
      breakTime: 5,
      time: '25:00',
      session: 'session',
      fillHeight: 0,
      finish: false,
      running: false,
    };
  }

  componentDidMount() {
    this.buzzer = new Audio('http://cpres.herokuapp.com/pomodoro-timer/egg-timer.wav');

    this.timer = Timr(`${this.state.sessionTime}m`)
      .ticker((ft, pd) => {
        this.setState({ time: ft, fillHeight: pd });
      })
      .finish(self => {
        this.setState({ finish: 'finish' });

        this.buzzer.play();

        // Timeout to give finish animation enough time to run.
        setTimeout(() => {
          const session = this.state.session === 'session' ? 'break' : 'session';

          this.setState({
            session,
            time: self.setStartTime(`${this.state[`${session}Time`]}m`),
            fillHeight: 0,
            finish: false
          });

          self.start();
        }, 3000)
      });
  };

  componentWillUnmount() {
    this.timer.destroy();
  };

  // Changing session length also resets timer
  changeSessionLength = val => {
    if (!this.state.running) {
      this.setState({
        session: 'session',
        sessionTime: val,
        running: false,
        fillHeight: 0,
        time: this.timer.setStartTime(`${val}m`),
      });
    }
  };

  changeBreakLength = val => {
    this.setState({ breakTime: val });
  };

  render() {
    const { session, finish, sessionTime, breakTime, fillHeight, time, running } = this.state;

    return (
      <section className="PomodoroTimer__wrapper">
        <section className='PomodoroTimer'>
          <section
            className={
              `PomodoroTimer__timer PomodoroTimer__timer--${session}`
            }
            onClick={() => {
              !running && !finish ? this.timer.start() : this.timer.pause();

              this.setState({ running: !running })
            }
          }>
            <span
              className={classNames({
                'PomodoroTimer__timer__fill': true,
                'PomodoroTimer__timer__fill--finish': finish,
              })}
              style={{height: `${fillHeight}%`}}
            />
            <span className="PomodoroTimer__timer__cta material-icons">
              {running ? 'pause' : 'play_arrow'}
            </span>
            <span className={`PomodoroTimer__timer__time`}>{time}</span>
          </section>
          <RangeInput
            time={sessionTime}
            changeFn={this.changeSessionLength}
            session="session"
          />
          <RangeInput
            time={breakTime}
            changeFn={this.changeBreakLength}
            session="break"
          />
        </section>
        <ProjectNotes
          title="Pomodoro Timer"
          js="cb3a0322449ebe2d0f6dfa07842147b8"
          css="f8e14138ac1625b8a11979642d3e69a9"
          titleLink="https://www.freecodecamp.com/challenges/build-a-pomodoro-clock"
          objective="Build a working Pomodoro timer. It should be functionally similar to: "
          objectiveLink="https://codepen.io/FreeCodeCamp/full/aNyxXR/"
          userStories={[
            'I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.',
            'I can reset the clock for my next pomodoro.',
            'I can customize the length of each pomodoro.'
          ]}
        />

      </section>
    );
  }
}

export default PomodoroTimer;
