import React from 'react';

import '../../App.css'
const User = ({
                  name,
                  username,
                  email,
                  street,
                  suite,
                  city,
                  zipcode,
                  lat,
                  lng,
                  phone,
                  website,
                  companyName,
                  companyCatchPhrase,
                  companyBs
              }) => {
    return (
        <div className={'User'}>
            <h3>{name}</h3>
            <div>{username}</div>
            <div>Email : {email}</div>
            <ul><h4>Address</h4>
                <li>Street : {street}</li>
                <li>Suite : {suite}</li>
                <li>City : {city}</li>
                <li>Zipcode : {zipcode}</li>
                <li>Lat : {lat}</li>
                <li>Lng : {lng}</li>
            </ul>
            <div>Phone : {phone}</div>
            <div>Website : {website}</div>
            <ul><h4>Company</h4>
                <li>CompanyName : {companyName}</li>
                <li>CompanyCatchPhrase : {companyCatchPhrase}</li>
                <li>CompanyBs : {companyBs}</li>
            </ul>
        </div>
    );
};

export default User;
