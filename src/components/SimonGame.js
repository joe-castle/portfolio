import React from 'react';
import classNames from 'classnames';

import ProjectNotes from './ProjectNotes';

// TODO: Call to action on mobile, show which button starts the game,
// with an animation?
// TODO: Finetune html5 audio problems

function GamePiece({
	color,
	flash,
	active,
	playing,
	children,
	userInput,
}) {
  let events;

  // Try/catch stop server render from erroring as window is not defined.
  // Events will be bound on the client.
  try {
    if ('ontouchstart' in window) {
      events = { onTouchStart: userInput };
    } else {
      events = { onMouseDown: userInput };
    }
  } catch(e) { }

  return (
    <div
      {...events}
      className={classNames({
        'SimonGame__piece': true,
        [`SimonGame__piece--${color}`]: true,
        [`SimonGame__piece--${color}--active`]: active,
        'SimonGame__piece--flash': flash,
        'SimonGame__piece--playing': playing,
      })}
    >
      {children}
    </div>
  );
}

class SimonGame extends React.Component {
	constructor() {
		super();

		this.initialState = this.state = {
			power: false,
			running: false,
			strict: false,
			playing: false,
			speed: 0,
			steps: 0,
			stepsFlash: false,
			winFlash: false,
			playOrder: [],
			playPiece: 0,
			timer: null,
			timers: [],
			activePieces: this.initialActivePieces = {
				green: false,
				red: false,
				yellow: false,
				blue: false
			}
		};
	};

  componentWillUnmount() {
    this.reset();
  }

	strict = () => {
		if (!this.state.running && this.state.power) {
			this.setState({ strict: !this.state.strict });
		}
	};

	power = () => {
    // Forces mobile browsers to perload the audio files before use
    // for (let key in this.refs) {
    //   this.refs[key].volume = 0;
    //   this.refs[key].play();
    //   this.refs[key].pause();
    //   this.refs[key].volume = 1;
    // }

		this.reset();
		this.setState({
      ...this.initialState,
      power: !this.state.power
    });
	};

  start = () => {
    if (!this.state.runnning && this.state.power) {
      this.setState({
        stepsFlash: true,
        running: true
      });

      // Timer allows the starting flash animation to finish.
      this.addTimer(() => {
        this.setState({ stepsFlash: false });
        this.nextGo();
      }, 2000);
    }
  };

  nextGo = () => {
    const { steps, speed } = this.state;

    if (steps < 20) {
      this.generatePlayPiece();
      this.setState({
        steps: steps + 1,
        speed: (steps === 4 || steps === 8 || steps === 12) ? speed + 250 : speed
      });
      this.playGo();
    } else {
      this.win();
    }
  };

	generatePlayPiece = () => {
		this.setState(({ playOrder, activePieces}) => ({
			playOrder: [
				...playOrder.slice(),
				Object.keys(activePieces)[Math.floor(Math.random() * 4)]
			]
		}));
	};

  playGo = () => {
    const { playOrder, speed } = this.state;

    // Resets the playPiece in the event of a failed go
    this.setState({ playPiece: 0 });

    playOrder.forEach((piece, index) => {
      this.addTimer(() => {
        this.flashPiece(piece);

        this.addTimer(this.resetPieces, 1000 - speed);
      }, index * (1250 - speed));
    });

    this.addTimer(this.setState, playOrder.length * (1250 - speed), { playing: true });
  };

  compareGo = (piece) => {
    const { playOrder, playPiece } = this.state;

    if (piece === playOrder[playPiece]) {
      this.setState({ playPiece: playPiece + 1});

      if (playPiece >= playOrder.length - 1) {
        this.setState({ playing: false });

        this.addTimer(this.nextGo, 500);
      }
    } else {
      this.addTimer(this.fail, 100);
    }
  };

  userInput = (piece) => {
    if (this.state.playing) {
      const listener = () => {
        this.resetPieces();
        this.compareGo(piece);

        window.removeEventListener('mouseup', listener);
        window.removeEventListener('touchend', listener);
      };

      this.flashPiece(piece);

      window.addEventListener('mouseup', listener);
      window.addEventListener('touchend', listener);
    }
  };

	resetPieces = () => {
		this.setState({ activePieces: this.initialActivePieces });

		for (let key in this.refs) {
			this.refs[key].pause();
			this.refs[key].currentTime = 0;
		}
	};

	flashPiece = (piece) => {
		this.setState({
			activePieces: {
				...this.initialActivePieces,
				[piece]: true
			}
		});

		this.refs[piece].play();
	};

	fail = () => {
		const { steps } = this.state;

		this.clear();
		this.refs.fail.play();

		this.setState({
			steps: '!!',
			stepsFlash: true,
			playing: false
		});

		if (this.state.strict) {
			this.addTimer(() => {
				this.reset();
				this.setState({ running: true });
				this.nextGo();
			}, 2000);
		} else {
			this.addTimer(() => {
				this.setState(state => ({
					steps,
					stepsFlash: false
				}));

				this.playGo();
			}, 2000);
		}
	};

	win = () => {
		this.clear();
		this.refs.win.play();

		this.setState({
			steps: '**',
			stepsFlash: true,
			playing: false,
			winFlash: this.state.playOrder[this.state.playOrder.length - 1]
		});

		this.addTimer(this.reset, 2000);
	};

	clear = () => {
		this.state.timers.forEach(timer => clearTimeout(timer));
		this.resetPieces();
	};

	reset = () => {
		this.clear();

		this.setState({
			...this.initialState,
			power: true,
			strict: this.state.strict
		});
	};

  zeroPad = num => num < 10 ? `0${num}` : `${num}`;

  addTimer = (cb, time, arg) => {
    this.setState({
      timers: [
        ...this.state.timers.slice(),
        setTimeout(cb.bind(this, arg), time)
      ]
    });
  };

	render() {
		const {
      steps,
      power,
      strict,
      running,
      playing,
      winFlash,
      stepsFlash,
      activePieces,
    } = this.state;

		return (
      <section className="SimonGame__wrapper">
        <section className={classNames({
          'SimonGame': true,
          'SimonGame--on': power,
          'SimonGame--off': !power,
        })}>
  				<div className='SimonGame__settings'>
            <div
              onClick={this.strict}
              className={classNames({
                'SimonGame__settings__strict': true,
                'SimonGame__settings__strict--active': strict,
              })}
            >
              Strict
            </div>
            <div
              onClick={() => running ? this.reset() : this.start()}
              className={classNames({
                'SimonGame__settings__steps': true,
                'SimonGame__settings__steps--running': running,
                'SimonGame__settings__steps--not-running': !running,
                'SimonGame__settings__steps--flash': stepsFlash,
              })}
            >
              {this.zeroPad(steps)}
            </div>
  					<div
              onClick={this.power}
  						className='SimonGame__settings__switch'
  					>
              {power ? 'On' : 'Off'}
            </div>
  				</div>
          {Object.keys(activePieces).map(piece =>
            <GamePiece
              key={piece}
              color={piece}
              playing={playing}
              flash={winFlash === piece}
              active={activePieces[piece] && 'active'}
              userInput={() => this.userInput(piece)}
            >
              <audio
                ref={piece}
                type='audio/mp3'
                src={`http://cpres.herokuapp.com/simon-game/${piece}.mp3`}
              />
            </GamePiece>
          )}
  				{['win', 'fail'].map(sound =>
  					<audio
              key={sound}
  						ref={sound}
  						type='audio/wav'
  						src={`http://cpres.herokuapp.com/simon-game/${sound}.wav`}
  					/>
  				)}
  			</section>
        <ProjectNotes
          title="Simon Game"
          js="e4119e99b570642efbf791954eb6bf5c"
          css="487c8fa788db61bcfb1455232829ce7d"
          titleLink="https://www.freecodecamp.com/challenges/build-a-simon-game"
          objective="Build a working Simon Game app that is functionally similar to: "
          objectiveLink="http://codepen.io/FreeCodeCamp/full/bELRjV"
          userStories={[
            'I am presented with a random series of button presses.',
            'Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.',
            'I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.',
            'If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.',
            'I can see how many steps are in the current series of button presses.',
            'If I want to restart, I can hit a button to do so, and the game will return to a single step.',
            'I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.',
            'I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.'
          ]}
        />
      </section>
		);
	};
}

export default SimonGame;
