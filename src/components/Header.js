import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import TypeWriter from 'react-typewriter'

function makeHeader(path) {

}
// TODO: Change front text, seperate front page and headers into seperate elemetns? Dont hjave the TypeWriter text?
function Header({ makeFooterVisible, contentActive, path }) {
  return (
    <header className={classNames({
      'Header': true,
      'Header--content-active': contentActive
    })}>
      {/*<span className="Header__gradient" />*/}
      <div className="container">
        <Link to="/">
          <img className="Header__img" src="http://placekitten.com/200/200" />
        </Link>
        { // Typed text only on home page
          contentActive ||
            <TypeWriter typing={1} onTypingEnd={makeFooterVisible}>
              <h1 className="Header__title">
                {contentActive ? 'Projects' : 'Hello, I\'m Joe. How are you?'}
              </h1>
            </TypeWriter>
        }
      </div>
    </header>
  );
}

export default Header;
