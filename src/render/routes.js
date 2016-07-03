import React from 'react';
import { Route } from 'react-router';

import App from '../components/App';
import Projects from '../components/Projects';

// Projects
import SimonGame from '../components/projects/SimonGame';
import TwitchApp from '../components/projects/TwitchApp';
import Calculator from '../components/projects/Calculator';
import QuoteGenerator from '../components/projects/QuoteGenerator';

export default (
  <Route path="/" component={App}>
    <Route path="projects" component={Projects} />
    <Route path="projects/SimonGame" component={SimonGame} />
    <Route path="projects/TwitchApp" component={TwitchApp} />
    <Route path="projects/Calculator" component={Calculator} />
    <Route path="projects/QuoteGenerator" component={QuoteGenerator} />
  </Route>
);
