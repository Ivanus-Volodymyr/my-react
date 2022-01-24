import React from 'react';

import './Post.css';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div className={'Post'}>
            <h4>Post Id : {id}</h4>
            <h5>{title}</h5>
            <Link to={id.toString()} state={post}>
                <button>Post Details</button>
            </Link>
        </div>
    );
};

export default Post;