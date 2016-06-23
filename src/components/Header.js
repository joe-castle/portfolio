import React from 'react';
import TypeWriter from 'react-typewriter'

function Header() {
  return (
    <header className="Header">
      <TypeWriter typing={1} maxDelay={200}>
        <h1 className="Header__title">Hello, I'm Joe. How are you?</h1>
      </TypeWriter>
    </header>
  );
}

export default Header;
