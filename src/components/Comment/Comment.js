import React from 'react';

import '../../App.css'

const Comment = ({postId, id, name, email, body}) => {
    return (
        <div className={'Comment'}>
            <h3>PostId : {postId}</h3>
            <h4>Id : {id}</h4>
            <h5>CommentName : {name}</h5>
            <div>CommentEmail : {email}</div>
            <div>CommentBody : {body}</div>
        </div>
    );
};

export default Comment;