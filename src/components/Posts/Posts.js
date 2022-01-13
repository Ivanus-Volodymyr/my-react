import React from 'react';

const Posts = ({post:{userId, id, title, body}}) => {

    return (
        <div className={'Post'}>
            <h2>User Id : {userId}</h2>
            <h3>Post Id : {id}</h3>
            <h4>{title}</h4>
            <hr/>
            <p>{body}</p>
        </div>
    );
};

export default Posts;