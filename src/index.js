import './assets/stylus/main.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import routes from './render/routes';

const store = configureStore(window.INITIAL_STATE);
const history = syncHistoryWithStore(browserHistory, store);

function render(routes) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(routes);

if (module.hot) {
  module.hot.accept('./render/routes', () => {
    render(require('./render/routes').default);
  })
}
