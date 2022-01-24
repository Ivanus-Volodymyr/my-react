import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import './UserDetails.css';
import {usersService} from "../../service/users.service";

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }
        usersService.getByID(id).then(value => setUser({...value}))
    }, [id, setUser, state]);

    return (
        <>
            <div className={'UserDetails'}>
                <h2>User with id : {id} details</h2>
                <h3>Id : {user.id}</h3>
                <h3>Name : {user.name}</h3>
                <h4>UserName : {user.username}</h4>
                <h5>Email : {user.email}</h5>
                <h5>Phone : {user.phone}</h5>
                <h5>Website : {user.website}</h5>
                <Link to={'posts'}>
                    <button>Post</button>
                </Link>
            </div>
            <div className={'UserPosts'}>
                <Outlet/>
            </div>
        </>
    );
};

export default UserDetails;