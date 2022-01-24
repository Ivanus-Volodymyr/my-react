import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../service/posts.service";
import UserPost from "../UserPost/UserPost";


const UserPosts = () => {

    const {id} = useParams();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(value => {
            const filterPosts = value.filter(posts => posts.userId == id);
            setUserPosts([...filterPosts])
        })
    }, [id]);

    return (
        <>
            {userPosts.map(post => <UserPost key={post.id} post={post}/>)}
        </>
    );
};

export default UserPosts;