import React from 'react';
import {Link} from "react-router-dom";

import './UserAlbum.css'

const UserAlbum = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div className={'UserAlbum'}>
            <h4>UserId : {userId}</h4>
            <h4>Id : {id}</h4>
            <h3>Title : {title}</h3>
            <Link to={`${id}/photos`}>
                <button>Photos</button>
            </Link>
        </div>
    );
};

export default UserAlbum;