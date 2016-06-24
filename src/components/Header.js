import React from 'react';
import classNames from 'classnames';
import TypeWriter from 'react-typewriter'

function Header({ makeFooterVisible, contentActive }) {
  return (
    <header className={classNames({
      'Header': true,
      'Header--content-active': contentActive
    })}>
      <TypeWriter typing={1} onTypingEnd={makeFooterVisible}>
        <h1 className="Header__title">Hello, I'm Joe. How are you?</h1>
      </TypeWriter>
    </header>
  );
}

export default Header;
