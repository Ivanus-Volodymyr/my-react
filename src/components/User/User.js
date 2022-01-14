import React from 'react';

import '../../App.css'

const User = ({name, username, email}) => {
    return (
        <div className={'User'}>
            <h3>{name}</h3>
            <div>{username}</div>
            <div>Email : {email}</div>
        </div>
    );
};

export default User;
