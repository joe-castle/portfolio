import React from 'react';
import Timr from 'timrjs';
import classNames from 'classnames';
// TODO: Better hover animation for clicking, and a call to action to make it clear that clicking
// starts the timer.
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
            type='range' min='1' max='99'
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
    this.timer = Timr(`${this.state.sessionTime}m`)
      .ticker((ft, pd) => {
        this.setState({ time: ft, fillHeight: pd });
      })
      .finish(self => {
        this.setState({ finish: 'finish' });

        this.refs.buzzer.play();

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
    this.setState({
      session: 'session',
      sessionTime: val,
      running: false,
      fillHeight: 0,
      time: this.timer.setStartTime(`${val}m`),
    });
  };

  changeBreakLength = val => {
    this.setState({ breakTime: val });
  };

  render() {
    const { session, finish, sessionTime, breakTime, fillHeight, time, running } = this.state;

    return (
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
        <audio
          ref='buzzer'
          type='audio/wav'
          src='http://cpres.herokuapp.com/pomodoro-timer/egg-timer.wav'
        />
      </section>
    );
  }
}

export default PomodoroTimer;
