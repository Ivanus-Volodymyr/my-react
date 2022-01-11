import {useEffect, useState} from "react";

import '../../App.css'
import User from "../User/User";

const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resolve => resolve.json())
            .then(users => setUsers(users))
    }, [])
    return (
        <div className={'Users'}>
            {users.map(value => <User name={value.name}
                                      username={value.username}
                                      email={value.email}
                                      street={value.address.street}
                                      suite={value.address.suite}
                                      city={value.address.city}
                                      zipcode={value.address.zipcode}
                                      lat={value.address.geo.lat}
                                      lng={value.address.geo.lng}
                                      phone={value.phone}
                                      website={value.website}
                                      companyName={value.company.name}
                                      companyCatchPhrase={value.company.catchPhrase}
                                      companyBs={value.company.bs}
                />
            )}
        </div>
    );
};

export default Users;
