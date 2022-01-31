import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <>
            <div className={'header'}>
                <Link to={'/'}>Rick and Morty !!!</Link>
            </div>
            <Outlet/>
        </>
    );
};

export default Header;