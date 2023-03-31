import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/players">Players</NavLink>
                </li>
            </ul>
        </nav>
    );
};
