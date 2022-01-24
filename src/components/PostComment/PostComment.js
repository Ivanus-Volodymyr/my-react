import React from 'react';

import './PostComment.css';

const PostComment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div className={'PostComment'}>
            <h2>Comment : {id}</h2>
            <h3>Post Id : {postId}</h3>
            <h4>Comment Id : {id}</h4>
            <h5>Comment Name : {name}</h5>
            <h5>Email : {email}</h5>
            <h5>Comment Body : {body}</h5>
        </div>
    );
};

export default PostComment;