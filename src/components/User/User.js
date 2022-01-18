import React from 'react';

import './User.css'

const User = ({user: {name, username, email}}) => {

    return (
        <div className={'User'}>
            <h3>{name}</h3>
            <div>{username}</div>
            <div>Email : {email}</div>
            <button>User Details</button>
        </div>
    );
};

export default User;
