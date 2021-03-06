import '../../App.css'
import Post from "../Post/Post";
import {useEffect, useState} from "react";
const Posts = () => {
    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resolve=>resolve.json())
            .then(posts=>setPosts(posts))
    },[])

    return (
        <div className={'Posts'}>
            {posts.map(value => <Post userId={value.userId} id={value.id} title={value.title} body={value.body}/>)}
        </div>
    );
};

export default Posts;