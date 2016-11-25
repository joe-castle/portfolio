import React from 'react';

class WeatherWidget extends React.Component {
  constructor() {
    super();

    this.state = {
      current: {},
      fourDayForecast: [],
    };
  }

  componentDidMount() {
    this.getWeather('London')
  }

  getDay = unixTime => (
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'][new Date(unixTime * 1000).getDay()]
  )

  makeWeatherObject = json => ({
    day: this.getDay(json.dt),
    temp: `${Math.round(json.main.temp)}°C`,
    type: json.weather[0].main,
    icon: json.weather[0].icon,
    wind: `${Math.round(json.wind.speed)} m/s`,
  });

  getWeather = city => {
    const searchString = (
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}` + `&units=metric&appid=61573140cac722bdbfd9eb0b2f1a6b50`
    );

    fetch(searchString)
      .then(res => res.json())
      .then(json => {
        const current = this.makeWeatherObject(json.list[0]);
        const fourDayForecast = json.list
          .reduce((prev, curr) => {
            if (/12:00:00/ig.test(curr['dt_txt'])) {
              prev.push(this.makeWeatherObject(curr))
            }

            return prev;
          }, [])
          .slice(0, 4);

          this.setState({
            current,
            fourDayForecast,
          });
      });
  }

  render() {
    return (
      <section className="WeatherWidget">
        <section className="WeatherWidget__wrapper">
          <section className="WeatherWidget__current">
            <span className="WeatherWidget__day">{this.state.current.day}</span>
            <img
              className="WeatherWidget__icon"
              src={`http://openweathermap.org/img/w/${this.state.current.icon}.png`}
            />
            <span className="WeatherWidget__temp">{this.state.current.temp}</span>
            <span className="WeatherWidget__wind">{this.state.current.wind}</span>
          </section>
          <section className="WeatherWidget__four-day-forecast">
            {this.state.fourDayForecast.map(day => (
              <section key={day.day} className="WeatherWidget__four-day-forecast__days">
                <span className="WeatherWidget__day">{day.day}</span>
                <img
                  className="WeatherWidget__icon"
                  src={`http://openweathermap.org/img/w/${day.icon}.png`}
                />
                <span className="WeatherWidget__temp">{day.temp}</span>
                <span className="WeatherWidget__wind">{day.wind}</span>
              </section>
            ))}
          </section>
        </section>
      </section>
    );
  }
}

export default WeatherWidget
