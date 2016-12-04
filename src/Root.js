import React from 'react';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './render/routes';

export default function Root({ store }) {
  return (
    <Router
      history={syncHistoryWithStore(browserHistory, store)}
      routes={routes}
      render={applyRouterMiddleware(useScroll())}
    />
  );
}
