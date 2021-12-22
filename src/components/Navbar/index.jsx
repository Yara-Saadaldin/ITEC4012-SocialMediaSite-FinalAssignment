import {
    NavLink
} from 'react-router-dom';

import "./styles.css";

import { Logout } from '../Logout';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to ="/"> Homepage </NavLink>
                </li>
              
                <li>
                    <NavLink to ="/CreateNewPost" activeClassName="nav-selected">  Create New post </NavLink>
                </li>

                <li>
                    <NavLink to ="/me" activeClassName="nav-selected"> Profile </NavLink>
                </li>


           <li>
                   <Logout/>
                </li> 


            </ul>
        </nav>
    );
}