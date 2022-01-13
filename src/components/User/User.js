import React from 'react';

const User = ({user: {id, name, email}, getUserId}) => {
    return (
        <div className={'User'}>
            <h2>User Id : {id}</h2>
            <h3>User Name : {name}</h3>
            <p>{email}</p>
            <button onClick={() => getUserId(id)}>Details</button>
        </div>
    );
};

export default User;