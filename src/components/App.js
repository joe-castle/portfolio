import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux'

import * as actions from '../actions/actionCreators';

import Nav from './Nav';
import NavButton from './NavButton';
import Header from './Header';
import Footer from './Footer';

// TODO: Extract similar code into react components

function App({
  children,
  location,
  navVisible,
  footerVisible,
  toggleNav,
  makeFooterVisible,
}) {
  const contentActive = !/^\/$/i.test(location.pathname);
  const fullPage = do {
    if (
      /^\/projects/i.test(location.pathname)
      || /^\/about/i.test(location.pathname)
      || !contentActive
    ) {
      false;
    } else {
      true;
    }
  }

  return (
    <div className={classNames({
      'App': true,
      'App--content-active': contentActive,
    })}>
      {fullPage || <Nav
        navVisible={navVisible}
        toggleNav={toggleNav}
        path={location.pathname}
      />}
      {fullPage || <NavButton
        navVisible={navVisible}
        toggleNav={toggleNav}
      />}
      {fullPage || <Header
        makeFooterVisible={makeFooterVisible}
        contentActive={contentActive}
        path={location.pathname}
      />}
      <main>
        {children}
      </main>
      <Footer
        footerVisible={footerVisible}
        contentActive={contentActive}
      />
    </div>
  );
}

export default connect(
  ({ navVisible, footerVisible }) => ({
    navVisible,
    footerVisible,
  }),
  actions
)(App)
