import React from 'react';
import './Header.scss';
import Nav from './Nav';
import Profile from './Profile';
import avatar from '../../img/user.jpg';


function Header() {
    const user = {
        first_name: 'Olivia',
        last_name: 'Wilde',
        avatar: avatar,
        get full_name() {
            return `${this.first_name} ${this.last_name}`;
        }
    };

    return (
        <header>
            <div className="wrapper">
                <Nav />
                <Profile user={user}/>
            </div>
        </header>
    );
}

export default Header;
