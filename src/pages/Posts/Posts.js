import Post from "../../components/Post/Post";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import './Posts.css';
import {postsService} from "../../service/posts.service";

const Posts = () => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll()
            .then(posts => setPosts(posts))
    }, [])

    return (
        <>
            <h1>Posts Page</h1>
            <div className={'MainPosts'}>
                <div className={'Posts'}>
                    {posts.map(value => <Post key={value.id} post={value}/>)}
                </div>
                <div className={'PostsOutlet'}>
                    <Outlet/>
                </div>
            </div>

        </>
    );
};

export default Posts;