import React from 'react';
import './index.scss';

function HostProfile({ name, picture }) {
    return (
        <div className="host-profile">
            <div className="host-profile-name">{name}</div>
            <img src={picture} alt={name} className="host-profile-picture" />
        </div>
    );
}

export default HostProfile;