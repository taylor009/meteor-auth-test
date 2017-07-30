import React from 'react';
import {NavLink} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const handleLogout = () => Meteor.logout();

const userName = () => {
    const user = Meteor.user();
    const name = user && user.profile ? user.profile.name : '';
    return user ? `${name.first} ${name.last}` : '';
};

export default class AuthenticatedNavigation extends React.Component{
    render(){
        $(".dropdown-button").dropdown();
        return(
            <div>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/posts">Post Feed</NavLink>
                    </li>
                    <li className="dropdown-button" data-activates="dropdown1"><a>{userName()}</a></li>
                </ul>
                <ul id="dropdown1" className="dropdown-content">
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>
        )
    }
}
