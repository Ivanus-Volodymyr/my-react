import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postsService} from "../../service/posts.service";
import './PostDetails.css';

const PostDetails = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [post, setPost] = useState([]);

    useEffect(() => {
        if (state) {
            setPost(state);
        }
        postsService.getByID(id).then(post => setPost({...post.data}));
    }, [id, state]);
    return (
        <>
            <div className={'PostDetails'}>
                <h1>Post Id : {post.id}</h1>
                <h3>User Id : {post.userId}</h3>
                <h4>Post Title</h4>
                <h4>{post.title}</h4>
                <h4>Post Body : {post.body}</h4>
                <Link to={'comments'}>
                    <button>Comments of this Post</button>
                </Link>
            </div>
            <div className={'PostComments'}>
                <Outlet/>
            </div>
        </>
    );
};

export default PostDetails;