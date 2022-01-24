import React from 'react'
import {Outlet, NavLink} from "react-router-dom";

import css from './Layout.module.css';


const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="users">Users</NavLink>
                <NavLink to="posts">Posts</NavLink>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;