import React, {useEffect, useState} from 'react';

import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import '../../App.css'
import Posts from "../Posts/Posts";
import {jsonPlaceholder} from "../../service/jsonplaceholder.service";



const Users = () => {


    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        jsonPlaceholder.getUsers()
            .then(users => setUsers(users));
    }, []);


    let getUserId = (id) => {
        jsonPlaceholder.getUserById(id)
            .then(user => setUser(user));
    };

    let getPostId = (id) => {
        jsonPlaceholder.getPosts()
            .then(posts => setPosts(posts.filter(value => value.userId === id)));
    };


    return (
        <>
            <div className={'MainUsers'}>
                <div className={'UsersMain'}>
                    {users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)};
                </div>

                <div className={'UserDetailsMain'}>
                    {user && <div><UserDetails details={user} getPostId={getPostId}/></div>};
                </div>
            </div>

            <div className={'MainPost'}>
                {posts.map(value => <Posts key={value.id} post={value}/>)}
            </div>
        </>
    );
};

export default Users;