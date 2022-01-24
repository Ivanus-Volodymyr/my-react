import React from 'react';

import './UserPost.css';

const UserPost = ({post}) => {
    const {userId, id, title, body} = post;

    return (
        <div className={'UserPost'}>
            <h2>User Id : {userId}</h2>
            <h4>Id : {id}</h4>
            <h4>Title : {title}</h4>
            <h5>Body : {body}</h5>
        </div>
    );
};

export default UserPost;