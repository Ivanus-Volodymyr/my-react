import React from 'react';

import '../../App.css'

const Post = ({userId, id, title, body}) => {
    return (
        <div className={'Post'}>
            <h3>UserId : {userId}</h3>
            <h4>Post Id : {id}</h4>
            <h5>{title}</h5>
            <div>{body}</div>
        </div>
    );
};

export default Post;