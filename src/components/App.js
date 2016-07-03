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

  return (
    <div className={classNames({
      'App': true,
      'App--content-active': contentActive,
    })}>
      <Nav
        navVisible={navVisible}
        toggleNav={toggleNav}
        path={location.pathname}
      />
      <NavButton
        navVisible={navVisible}
        toggleNav={toggleNav}
      />
      <Header
        makeFooterVisible={makeFooterVisible}
        contentActive={contentActive}
        path={location.pathname}
      />
      <main className="container">{children}</main>
      <Footer
        footerVisible={footerVisible}
        contentActive={contentActive}
      />
    </div>
  );
}

export default connect(
  ({ navVisible, footerVisible, routing }) => ({
    navVisible,
    footerVisible,
  }),
  actions
)(App)
