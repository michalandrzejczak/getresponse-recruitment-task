import React from 'react';
import './Header.scss';
import ChevronDown from '../../img/svg/ChevronDown';
import user from '../../img/user.jpg';

function Header() {
    return (
        <header>
            <div className="wrapper">
                <nav className="nav">
                    <a href="#dashboard" className="nav_link nav_link-active">Dashboard</a>
                    <a href="#recipes">Recipes</a>
                    <a href="#challenge">Challenge</a>
                </nav>
                <span className="profile">
                    <div className="profile_image">
                        <img src={user} alt="User profile"/>
                    </div>
                    <span className="profile_name">Olivia Wilde</span>
                    <ChevronDown/>
                </span>
            </div>
        </header>
    );
}

export default Header;
