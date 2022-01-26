import React from 'react';

const Episode = ({episode}) => {
    const {id, name, air_date} = episode
    return(
        <div>
            <h3>Id : {id}</h3>
            <h3>Episode name : {name}</h3>
            <h3>Episode air_date : {air_date}</h3>
        </div>
    );
};

export default Episode;