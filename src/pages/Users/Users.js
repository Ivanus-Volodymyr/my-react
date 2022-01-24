import {useEffect, useState} from "react";

import User from "../../components/User/User";
import './Users.css';
import './MainUsers.css'

import {usersService} from "../../service/users.service";
import {Outlet} from "react-router-dom";

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll()
            .then(users => setUsers([...users]));
    }, []);

    return (
        <>
            <h1>Users Page</h1>
            <div className={'MainUsers'}>
                <div className={'Users'}>
                    {users.map(user => <User key={user.id} user={user}/>)}
                </div>
                <div className={'OutletClassUsers'}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default Users;
