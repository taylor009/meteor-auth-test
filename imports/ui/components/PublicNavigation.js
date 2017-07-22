import React from 'react';
import {NavLink} from 'react-router-dom';

const PublicNavigation = () => (
           <nav>
               <ul className="right hide-on-med-and-down">
                   <li>
                       <NavLink to="/signup" activeClassName="active">Signup</NavLink>
                   </li>
                   <li>
                       <NavLink to="/login" activeClassName="active">Login</NavLink>
                   </li>
               </ul>
           </nav>
);

export default PublicNavigation;