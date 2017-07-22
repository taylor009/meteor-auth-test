import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = authenticated =>
    (authenticated ? <AuthenticatedNavigation /> : <PublicNavigation />);

const AppNavigation = ({authenticated}) => (
  <nav>
      <div className="nav-wrapper navbar">
          <Link to="/" className="brand-logo">Discover U Write</Link>
      </div>
      <ul className="right hide-on-med-and-down">
          <li>{renderNavigation(authenticated)}</li>
      </ul>
  </nav>
);

AppNavigation.propTypes = {
    authenticated: PropTypes.bool,
};

export default AppNavigation;