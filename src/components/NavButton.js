import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

function NavButton({ navVisible, toggleNav }) {
  return (
    <button
      type="button"
      onClick={toggleNav}
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

export default NavButton
