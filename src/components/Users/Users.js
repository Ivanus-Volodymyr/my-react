import {useEffect, useState} from "react";

import '../../App.css'
import User from "../User/User";

import {jsonPlaceholder} from "../../service/jsonplaceholder.service";

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        jsonPlaceholder.getUsers()
            .then(users => setUsers(users));
    }, []);

    return (
        <div className={'Users'}>
            {users.map(value => <User key={value.id} user={value}/>
            )}
        </div>
    );
};

export default Users;
