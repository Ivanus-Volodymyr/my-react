import React from 'react';

import './User.css'
import UserDetails from "../UserDetails/UserDetails";

const User = ({user: {id, name, username, email}}) => {

    const details = () => {
        <UserDetails id={id}/>
    }
    return (
        <div className={'User'}>
            <h3>{name}</h3>
            <div>{username}</div>
            <div>Email : {email}</div>
            <button onClick={details}>User Details</button>
        </div>
    );
};

export default User;
