import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

function Nav({ navVisible }) {
  return (
    <nav className={classNames({
      Nav: true,
      'Nav--visible': navVisible,
    })}>
      <section className='Nav__links'>
        <Link to="/projects" className="Nav__links__link">Projects</Link>
        <Link to="/about" className="Nav__links__link">About Me</Link>
      </section>
    </nav>
  )
}

export default connect(({ navVisible }) => ({ navVisible }))(Nav)
