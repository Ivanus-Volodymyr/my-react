import React from 'react';

const UserDetails = ({
                         details: {
                             id,
                             name,
                             email,
                             address: {
                                 street,
                                 suite,
                                 city,
                                 zipcode,
                                 geo: {
                                     lat,
                                     lng,
                                 }
                             },
                             phone,
                             website,
                             company: {
                                 catchPhrase,
                                 bs
                             }
                         }, getPostId
                     }) => {

    return (
        <div className={'UserDetails'}>
            <h2>User Id : {id}</h2>
            <h3>{name}</h3>
            <div>Email : {email}</div>
            <hr/>
            <ul><h4>Address</h4>
                <li>Street : {street}</li>
                <li>Suite : {suite}</li>
                <li>City : {city}</li>
                <li>Zipcode : {zipcode}</li>
                <li>Lat : {lat}</li>
                <li>Lng : {lng}</li>
            </ul>
            <hr/>
            <div>Phone : {phone}</div>
            <div>Website : {website}</div>
            <hr/>
            <ul><h4>Company</h4>
                <li>CompanyCatchPhrase : {catchPhrase}</li>
                <li>CompanyBs : {bs}</li>
            </ul>
            <hr/>
            <button onClick={() => getPostId(id)}>Post of this User</button>
        </div>
    );
};

export default UserDetails;