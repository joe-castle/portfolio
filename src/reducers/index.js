import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import navVisible from './navVisible';

export default combineReducers({
  navVisible,
  routing: routerReducer,
});
