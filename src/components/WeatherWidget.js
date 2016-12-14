import React from 'react';
import classNames from 'classnames';

import ProjectNotes from './ProjectNotes';

function WeatherIcon({
  type,
}) {
  switch(type) {
    case 'Clouds': return (
      <div className='icon'>
        <div className='cloud'></div>
        <div className='cloud'></div>
      </div>
    );
    case 'Rain': case 'Drizzle': return (
      <div className='icon'>
        <div className='cloud'></div>
        <div className='rain'></div>
      </div>
    );
    case 'Thunderstorm': return (
      <div className='icon'>
        <div className='cloud'></div>
        <div className='lightning'>
          <div className='bolt'></div>
          <div className='bolt'></div>
        </div>
      </div>
    );
    case 'Snow': return (
      <div className='icon'>
        <div className='cloud'></div>
        <div className='snow'>
          <div className='flake'></div>
          <div className='flake'></div>
        </div>
      </div>
    );
    case 'Clear': default: return (
      <div className='icon'>
        <div className='sun'>
          <div className='rays'/>
        </div>
      </div>
    );
  }
};

class WeatherWidget extends React.Component {
  constructor() {
    super();

    this.state = {
      current: {},
      selectedDay: 'Today',
      forecast: [],
      location: 'Loading...',
    };
  }

  componentDidMount() {
    this.getLocation()
  }

  getDay = unixTime => (
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'][new Date(unixTime * 1000).getDay()]
  )

  getCurrent = (day, forecast) => (
    forecast.find(item => item.day === day)
  );

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.getWeather(`lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
      }, () => { this.getWeather('q=London'); });
    } else {
      this.getWeather('q=London');
    }
  }

  getWeather = location => {
    const api = (location => url => (
      fetch(
        `http://api.openweathermap.org/data/2.5/${url}?${location}` +
        '&units=metric&appid=61573140cac722bdbfd9eb0b2f1a6b50'
      ).then(res => res.json())
    ))(location);

    this.setState({ location: 'Loading...' });

    Promise
      .all([api('weather'), api('forecast')])
      .then(([current, forecast]) => {
        const newForecast = forecast.list
          .reduce((prev, curr) => {
            if (
              /12:00:00/ig.test(curr['dt_txt'])
              && this.getDay(curr.dt) !== this.getDay(Date.now() / 1000)
            ) {
              return [...prev, this.makeWeatherObject(curr)];
            }

            return prev;
          }, [this.makeWeatherObject(current)])
          .slice(0, 5);

        this.setState({
          location: `${forecast.city.name}, ${forecast.city.country}`,
          current: this.getCurrent(this.state.selectedDay, newForecast),
          forecast: newForecast,
        });
      })
      .catch(error => {
        this.setState({ location: 'Unable to find city' });
      });
  }

  makeWeatherObject = json => ({
    day: this.getDay(json.dt) === this.getDay(Date.now() / 1000)
      ? 'Today'
      : this.getDay(json.dt),
    temp: `${Math.round(json.main.temp)}°C`,
    type: json.weather[0].main,
    wind: `${Math.round(json.wind.speed)} m/s`,
  });

  render() {
    return (
      <section className="WeatherWidget__wrapper">
        <section className="WeatherWidget">
          <form onSubmit={ev => {
            ev.preventDefault();
            this.getWeather(`q=${this.cityName.value}`)
            this.cityName.value = '';
          }}>
            <input
              ref={c => { this.cityName = c; }}
              className="WeatherWidget__city-input"
              placeholder="Enter city name..."
            />
          </form>
          <section className="WeatherWidget__forecast">
            {this.state.forecast.map(day => (
              <section
                key={day.day}
                onClick={() => this.setState({
                  selectedDay: day.day,
                  current: this.getCurrent(day.day, this.state.forecast)
                })}
                className={classNames({
                  WeatherWidget__forecast__days: true,
                  'WeatherWidget__forecast__days--active': this.state.selectedDay === day.day,
                })}
              >
                <span className="WeatherWidget__forecast__days__day">{day.day}</span>
                <span className="WeatherWidget__forecast__days__temp">{day.temp}</span>
              </section>
            ))}
          </section>
          <section className="WeatherWidget__current">
            <section className="WeatherWidget__current__values">
              <span className="WeatherWidget__current__day">
                {this.state.current.day}
              </span>
              <span className="WeatherWidget__current__location">
                {this.state.location}
              </span>
              <span className="WeatherWidget__current__temp">
                {this.state.current.temp}
              </span>
            </section>
            <WeatherIcon type={this.state.current.type} />
          </section>
        </section>
        <p style={{
          margin: '10px 0 0 0',
          textAlign: 'center'
        }}>
          Weather icons courtesy of{' '}
          <a href="http://codepen.io/joshbader/full/EjXgqr/">Josh Bader</a>.
        </p>
        <ProjectNotes
          title="Weather Widget"
          js="1cceca2a506142161dc8e507ff68552e"
          css="698959a7be55ca5a8faab78c7ec2af6e"
          titleLink="https://www.freecodecamp.com/challenges/show-the-local-weather"
          objective="Build an app that can show the weather of a given city. It should be functionally similar to: "
          objectiveLink="http://codepen.io/FreeCodeCamp/full/bELRjV"
          userStories={[
            'I can see the weather in my current location.',
            'I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.',
            'I can push a button to toggle between Fahrenheit and Celsius.',
          ]}
        />
      </section>
    );
  }
}

export default WeatherWidget
