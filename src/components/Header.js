import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import TypeWriter from 'react-typewriter'

function Header({ makeFooterVisible, contentActive, path }) {
  return (
    <header className={classNames({
      'Header': true,
      'Header--content-active': contentActive
    })}>
      <div className="container">
        <Link to="/">
          <img className="Header__img" src="http://placekitten.com/200/200" />
        </Link>
        { // Typed text only on home page
          contentActive ||
            <TypeWriter typing={1} onTypingEnd={makeFooterVisible}>
              <h1 className="Header__title">
                Hi, I'm Joe. I am an aspiring web developer.
              </h1>
            </TypeWriter>
        }
      </div>
    </header>
  );
}

export default Header;
