import React from 'react';
import classNames from 'classnames';
import TypeWriter from 'react-typewriter'

function Header({ makeFooterVisible, contentActive }) {
  const title = (
    <h1 className="Header__title">
      {contentActive ? 'Projects' : 'Hello, I\'m Joe. How are you?'}
    </h1>
  );

  return (
    <header className={classNames({
      'Header': true,
      'Header--content-active': contentActive
    })}>
      { // Typed text only on home page
        contentActive
          ? title
          : <TypeWriter typing={1} onTypingEnd={makeFooterVisible}>
            {title}
          </TypeWriter>
      }
    </header>
  );
}

export default Header;
