import React from 'react';

const UserDetails = ({details: {id, name, email, phone}}) => {
    return (
        <div>
            !-!{id}-!-{name}-!-{email}-!-{phone}
        </div>
    );
};

export default UserDetails;