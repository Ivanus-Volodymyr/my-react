import React, {useEffect, useState} from 'react';
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resolve => resolve.json())
            .then(users => setUsers(users))
    }, [])

    let getUserId = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(resolve => resolve.json())
            .then(user => setUser(user))
    }
    return (
        <div>
            <div>{users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}</div>
            {user && <div><UserDetails details={user}/></div>}
        </div>
    );
};

export default Users;