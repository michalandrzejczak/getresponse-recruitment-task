import React from 'react';
import PropTypes from 'prop-types';
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

Profile.propTypes = {
    user: PropTypes.shape({
        first_name: PropTypes.string.isRequired,
        last_name:  PropTypes.string.isRequired,
        avatar:     PropTypes.string.isRequired,
        full_name:  PropTypes.string.isRequired,
    }),
};

export default Profile;