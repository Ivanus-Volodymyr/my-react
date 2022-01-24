import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentsService} from "../../service/comments.service";
import PostComment from "../PostComment/PostComment";

const PostComments = () => {
    const {id} = useParams();
    const [postsComments, setPostsComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => {
            const filterComments = value.filter(value => value.postId == id);
            setPostsComments(filterComments);
        })
    }, [id]);

    return (
        <>
            {postsComments.map(comment => <PostComment key={comment.id} comment={comment}/>)}
        </>
    );
};

export default PostComments;