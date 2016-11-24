import React from 'react';
import { Route } from 'react-router';

import App from '../components/App';
import Projects from '../components/Projects';

// Projects
import TimrJS from '../components/TimrJS';
import SimonGame from '../components/SimonGame';
import TwitchApp from '../components/TwitchApp';
import Calculator from '../components/Calculator';
import QuoteGenerator from '../components/QuoteGenerator';
import PomodoroTimer from '../components/PomodoroTimer';
import WeatherWidget from '../components/WeatherWidget';
import GameOfLife from '../components/GameOfLife';

export default (
  <Route path="/" component={App}>
    <Route path="projects" component={Projects} />
    <Route path="TimrJS" component={TimrJS} />
    <Route path="projects/SimonGame" component={SimonGame} />
    <Route path="projects/TwitchApp" component={TwitchApp} />
    <Route path="projects/Calculator" component={Calculator} />
    <Route path="projects/QuoteGenerator" component={QuoteGenerator} />
    <Route path="projects/PomodoroTimer" component={PomodoroTimer} />
    <Route path="projects/WeatherWidget" component={WeatherWidget} />
    <Route path="projects/GameOfLife" component={GameOfLife} />
  </Route>
);
