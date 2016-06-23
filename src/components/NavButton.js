import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { toggleNav } from '../actions/navVisbleActions';

function NavButton({
  dispatch,
  navVisible,
}) {
  return (
    <button
      type="button"
      onClick={() => dispatch(toggleNav())}
      className={classNames({
        tcon: true,
        'tcon-menu--xcross': true,
        'tcon-transform': navVisible,
      })}
      aria-label="toggle menu"
    >
      <span className="tcon-menu__lines" aria-hidden="true"></span>
      <span className="tcon-visuallyhidden">toggle menu</span>
    </button>
  );
}

export default connect(({ navVisible }) => ({ navVisible }))(NavButton)
