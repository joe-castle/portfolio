import React, { PropTypes } from 'react';

import { connect } from 'react-redux'

import Nav from './Nav';
import NavButton from './NavButton';
import Header from './Header';

function App({ children }) {
  return (
    <div className="App">
      <Nav />
      <NavButton />
      <Header />
      {children}
      <footer></footer>
    </div>
  );
}

export default App
