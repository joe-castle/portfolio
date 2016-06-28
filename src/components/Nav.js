import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

function Nav({ navVisible, toggleNav, path }) {
  return (
    <nav className={classNames({
      Nav: true,
      'Nav--visible': navVisible,
    })}>
      <div className="container">
        <section className='Nav__links'>
          {[['/projects', 'Projects'], ['/about', 'About Me']].map(link => (
            <Link
              key={link[0]}
              onClick={toggleNav}
              to={link[0]}
              className={classNames({
                'Nav__links__link': true,
                'Nav__links__link--active': path === link[0]
              })}
            >
              {link[1]}
            </Link>
          ))}
        </section>
      </div>
    </nav>
  )
}

export default Nav
