import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import navVisible from './navVisible';
import footerVisible from './footerVisible';

export default combineReducers({
  navVisible,
  footerVisible,
  routing: routerReducer,
});
