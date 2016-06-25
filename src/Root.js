import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './render/routes';

export default function Root({ store }) {
  return (
    <Router
      history={syncHistoryWithStore(browserHistory, store)}
      routes={routes}
    />
  );
}
