import React from 'react';
import './Profile.scss';
import chevron from '../../img/chevron-down.png';


function Profile({user}) {
    return (
        <span className="profile">
            <a href="#profile-change-avatar" title="Change avatar" className="profile_image">
                <img src={user.avatar} alt="User profile"/>
            </a>
            <a href="#profile-dropdown" className="profile_dropdown">
                <span className="profile_name">{user.full_name}</span>
                <img src={chevron} alt="chevron-down"/>
            </a>
        </span>
    );
}

export default Profile;