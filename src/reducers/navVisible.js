import { TOGGLE_NAV } from '../actions/actionTypes';

export default function navVisble(state = false, {
  type,
}) {
  switch (type) {
    case TOGGLE_NAV:
      return !state

    default:
      return state;
  }
}
