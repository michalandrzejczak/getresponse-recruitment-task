import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';
import chevron from '../../../img/chevron-down.png';


function Profile({user}) {
    return (
        <Link to="/profile/edit" className="profile" title="Edit profile">
            <div className="profile_image">
                <img src={user.avatar} alt="User profile"/>
            </div>
            <span className="profile_span">
                <span className="profile_name">{user.full_name}</span>
                <img src={chevron} alt="chevron-down"/>
            </span>
        </Link>
    );
}

export default Profile;