import React from 'react';
import {NavLink} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

const handleLogout = () => Meteor.logout();

const userName = () => {
    const user = Meteor.user();
    const name = user && user.profile ? user.profile.name : '';
    return user ? `${name.first} ${name.last}` : '';
};

const AuthenticatedNavigation = () => (
    <nav>
        <li>
            <NavLink to="/post">Post Feed</NavLink>
        </li>
        <ul className="right hide-on-med-and-down">
            <li><a className="dropdown-button" eventKey={3} data-activates="dropdown1">{userName()}<i className="material-icons right">arrow_drop_down</i></a></li>
        </ul>
        <ul id="dropdown1" className="dropdown-content">
            <li eventKey={3.1} onClick={handleLogout}>Logout</li>
        </ul>
    </nav>
);

export default AuthenticatedNavigation
