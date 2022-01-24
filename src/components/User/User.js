import React from 'react';

import './User.css';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div className={'User'}>
            <h2>User</h2>
            <h3>Id : {id}</h3>
            <h3>Name : {name}</h3>
            <div>
                <Link to={id.toString()} state={user}>
                    <button>User Details</button>
                </Link>
                <Link to={`${id}/albums`}>
                    <button>User Album</button>
                </Link>
            </div>
        </div>
    );
};

export default User;
