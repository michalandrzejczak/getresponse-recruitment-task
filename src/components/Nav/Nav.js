import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.scss';

function Nav() {
    return (
        <nav className="nav">
            <NavLink exact to="/" className="nav_link nav_link-active" title="Dashboard">Dashboard</NavLink>
            <NavLink to="/recipes" className="nav_link" title="Recipes">Recipes</NavLink>
            <NavLink to="/challenge" className="nav_link" title="Challenge">Challenge</NavLink>
        </nav>
    );
}

export default Nav;