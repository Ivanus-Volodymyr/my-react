import React from 'react';

const User = ({user: {id, name, email}, getUserId}) => {
    return (
        <div>
            <div className={'User'}>
                <h2>{id}</h2>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
            <button onClick={() => getUserId(id)}>Details</button>
        </div>
    );
};

export default User;