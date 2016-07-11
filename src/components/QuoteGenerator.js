import React from 'react';

import Button from './Button';

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
            color="blue"
            href={`https://twitter.com/intent/tweet?text=${this.state.quote.quote}`}
            target="_blank"
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
    );
  }
}

export default QuoteGenerator;
