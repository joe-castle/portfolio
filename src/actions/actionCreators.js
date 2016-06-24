import * as actionTypes from './actionTypes';
import factory from './actionCreatorFactory';

export const toggleNav = factory(actionTypes.TOGGLE_NAV);
export const makeFooterVisible = factory(actionTypes.MAKE_FOOTER_VISIBLE);
