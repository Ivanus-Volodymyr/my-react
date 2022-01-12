import {useEffect, useState} from "react";

import '../../App.css'
import Post from "../Post/Post";

const Posts = () => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resolve => resolve.json())
            .then(posts => setPosts(posts))
    }, []);

    return (
        <div className={'Posts'}>
            {posts.map(value => <Post key={value.id} userId={value.userId} id={value.id} title={value.title} body={value.body}/>)}
        </div>
    );
};

export default Posts;