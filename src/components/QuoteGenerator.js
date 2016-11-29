import React from 'react';

import Button from './Button';
import ProjectNotes from './ProjectNotes';

class QuoteGenerator extends React.Component {
  constructor() {
    super();

    this.state = {
      quote: ''
    }
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = () => {
    this.setState({ quote: '' });

    const headers = {
      'X-Mashape-Authorization': '9uCHJb0kOLmshQocAYgSEhkjt0ejp1CyPkOjsndRdVL5aBYHch',
    };

    fetch('https://andruxnet-random-famous-quotes.p.mashape.com/', { headers })
      .then(res => res.json())
      .then(quote => {
        this.setState({ quote });
      })
  }

  render() {
    return (
      <section className="QuoteGenerator__Wrapper">
        <section className="QuoteGenerator">
          <section className="QuoteGenerator__actions">
            <Button
              color="green"
              onClick={this.getNewQuote}
              className="QuoteGenerator__actions__new-quote"
            >
              New Quote
            </Button>
            <Button
              onClick={() => window.open(
                `https://twitter.com/intent/tweet?text="${this.state.quote.quote}" - ${this.state.quote.author}`
              )}
              color="blue"
              className="QuoteGenerator__actions__tweet"
            >
              Tweet
            </Button>
          </section>
          <article className="QuoteGenerator__quote">
            {this.state.quote ? (
              <div>
                <span className="QuoteGenerator__quote__text">{this.state.quote.quote}</span>
                <span className="QuoteGenerator__quote__author">{this.state.quote.author}</span>
              </div>
            ) : <div className="loader">Loading...</div>}
          </article>
        </section>
        <ProjectNotes
          title="Pomodoro Timer"
          js="77208ccb6b8867f89f7a754ccfbebcd0"
          css="4e5ef65ebbaabe6fc10da1e41ee42139"
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

export default QuoteGenerator;
