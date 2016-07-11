import React from 'react';
import classNames from 'classnames';
import { generate } from 'shortid';

function Nav({
	filter,
	setFilter
}) {
  return (
  	<nav className="TwitchApp__header__nav">
			{['All', 'Online', 'Offline'].map(item =>
				<span
          onClick={() => setFilter(item)}
					key={item}
          className={classNames({
            'TwitchApp__header__nav__item': true,
            'TwitchApp__header__nav__item--active': filter === item,
          })}
				>
					{item}
				</span>
			)}
  	</nav>
  );
}

function StreamersBox({
	filter,
	streamers,
	searchString,
	deleteStreamer,
}) {
  return (
  	<section className="TwitchApp__streamers-box">
			{streamers.filter(({ name, online }) => (
				RegExp(searchString, 'ig').test(name) && (
					filter === 'All' ||
					filter === 'Online' && online ||
					filter === 'Offline' && !online
				)
			)).map(streamer =>
				<Streamer
          key={streamer.id}
					deleteStreamer={deleteStreamer}
          {...streamer}
				/>
			)}
  	</section>
  )
}

function Streamer({
	id,
  logo,
  name,
  error,
  status,
  online,
	deleteStreamer,
}) {
  return (
    <article className={classNames({
      'TwitchApp__streamers-box__streamer': true,
      'TwitchApp__streamers-box__streamer--online': online,
    })}>
      <figure>
        <img
          className="TwitchApp__streamers-box__streamer__logo"
          src={logo}
        />
        <figcaption className="TwitchApp__streamers-box__streamer__name">
          <a href={`http://www.twitch.tv/${name}`} target='_blank'>{name}</a>
        </figcaption>
      </figure>
      <aside className="TwitchApp__streamers-box__streamer__status">
        {error || online && status}
      </aside>
      <i
        className="TwitchApp__streamers-box__streamer__status-icon material-icons"
      >
        {online ? 'radio_button_checked' : 'radio_button_unchecked'}
      </i>
      <i
        onClick={() => deleteStreamer(id)}
        className="TwitchApp__streamers-box__streamer__delete-icon material-icons"
      >
        close
      </i>
    </article>
  );
}

class TwitchApp extends React.Component {
	constructor() {
		super();

		this.state = {
			streamers: [],
			searchString: '',
			filter: 'All',
			fetching: false
		}
	};

	componentDidMount = () => {
    ['brunofin', 'comster404', 'freecodecamp',
    'storbeck', 'terakilobyte',
    'habathcx', 'RobotCaleb', 'thomasballinger',
    'noobs2ninjas', 'beohoff', 'medrybw',].forEach(this.getStreamer)
	};

  getStreamer = streamer => {
    // Checks if the streamer already exists in the array.
    // If so,
    if (!this.state.streamers.some(({ name }) => name.toLowerCase() === streamer)) {
      this.setState({ fetching: true });

      this.fetchStreamer(streamer)
        .then(this.addStreamer)
        .then(() => {
          this.setState({ fetching: false })
          this.refs.streamerForm.reset();
        })
    } else {
      this.refs.streamerForm.reset();
    }
  };

	fetchStreamer = streamer => {
		const api = (streamer => url => (
			fetch(`https://api.twitch.tv/kraken/${url}/${streamer}`)
      .then(res => res.json())
		))(streamer);

    return Promise.all([api('channels'), api('streams')])
	};

	addStreamer = ([channel, stream]) => {
		this.setState(({ streamers }) => {
      const { name, error } = this.checkAccountStatus(channel.message, channel.status);

			return {
        streamers: [
          {
            id: generate(),
            logo: channel.logo || 'http://placehold.it/100x100',
            name: error ? name : channel.display_name,
            status: channel.status,
            online: !!stream.stream,
            error,
          },
  				...streamers,
  			]
      }
		});
	};

  checkAccountStatus = (message, status) => {
    const extractName = message => message.match(/'(\w+)'/i)[1];

    if (status === 422) {
      return {
        name: extractName(message),
        error: 'Account closed',
      };
    } else if (status === 404) {
      return {
        name: extractName(message),
        error: 'Account does not exist',
      };
    }

    return { error: false }
  }

	deleteStreamer = id => {
		this.setState(({ streamers }) => ({
			streamers: streamers.filter(streamer => streamer.id !== id)
		}));
	};

	render = () => (
		<section className='TwitchApp'>
      <header className="TwitchApp__header">
        <section className="TwitchApp__header__inputs">
  				<input
            className='TwitchApp__header__inputs__search-input'
            placeholder='Search...'
            onChange={ev => this.setState({ searchString: ev.target.value })}
  				/>
          <form
            onSubmit={ev => {
              ev.preventDefault();
              this.getStreamer(this.refs.streamerInput.value)
            }}
            ref='streamerForm'
          >
  					<input
              ref='streamerInput'
  						className='TwitchApp__header__inputs__new-streamer-input'
  						placeholder='Add a streamer...'
  					/>
    			</form>
  			</section>
        <Nav
          filter={this.state.filter}
          setFilter={filter => this.setState({ filter })}
        />
      {this.state.fetching && <div className="TwitchApp__header__loading" />}
      </header>
			<StreamersBox
				filter={this.state.filter}
				searchString={this.state.searchString}
				streamers={this.state.streamers}
				deleteStreamer={this.deleteStreamer}
			/>
  </section>
	);
};

export default TwitchApp;
