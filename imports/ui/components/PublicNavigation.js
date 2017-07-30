import React from 'react';
import {NavLink} from 'react-router-dom';

const PublicNavigation = () => (
               <ul className="right hide-on-med-and-down">
                   <li>
                       <NavLink to="/signup" activeClassName="active">Signup</NavLink>
                   </li>
                   <li>
                       <NavLink to="/login" activeClassName="active">Login</NavLink>
                   </li>
               </ul>

);

export default PublicNavigation;