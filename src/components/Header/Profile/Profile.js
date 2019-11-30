import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';
import chevron from '../../../img/chevron-down.png';


function Profile({user}) {
    return (
        <span className="profile">
            <Link to="/profile/avatar" title="Change avatar" className="profile_image">
                <img src={user.avatar} alt="User profile"/>
            </Link>
            <a href="#profile-dropdown" className="profile_dropdown">
                <span className="profile_name">{user.full_name}</span>
                <img src={chevron} alt="chevron-down"/>
            </a>
        </span>
    );
}

export default Profile;