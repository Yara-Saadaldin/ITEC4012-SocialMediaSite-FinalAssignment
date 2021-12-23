import "./styles.css";
import {NavLink} from 'react-router-dom';
import {Logout} from '../Logout';
import {ImHome} from 'react-icons/im';
import {FaUser} from 'react-icons/fa';
import {SiAddthis} from 'react-icons/si';


export const Navbar = () => {
    return (
        <nav className="navbar">

            <ul className="navbar-list">
                
                <li> <NavLink exact={true} to="/"> <ImHome/> </NavLink> </li>

                <li> <NavLink to="/me"> <FaUser/> </NavLink> </li>

                <li> <NavLink to="/CreateNewPost"> <SiAddthis/> </NavLink> </li>

                <li> <Logout/> </li>

            </ul>

        </nav>
    );
}