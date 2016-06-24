import { MAKE_FOOTER_VISIBLE } from '../actions/actionTypes';

export default function(state = false, {
  type,
}) {
  switch(type) {
    case MAKE_FOOTER_VISIBLE:
      return true;

    default:
      return state;
  }
}
