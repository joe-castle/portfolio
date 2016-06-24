import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../components/App';
import Projects from '../components/Projects';

// Projects
// import SimonGame from '../components/projects/SimonGame';
// import TwitchApp from '../components/projects/TwitchApp';
// import Calculator from '../components/projects/Calculator';

export default (
  <Route path="/" component={App}>
    {/*<IndexRoute component={Home} />*/}
    <Route path="projects" component={Projects} />
  </Route>
);
