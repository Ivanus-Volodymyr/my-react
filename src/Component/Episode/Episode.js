import React from 'react';

import './Episode.css'

const Episode = ({episode}) => {
    const {id, name, air_date} = episode
    return(
        <div className={'Episode'}>
            <h3>Id : {id}</h3>
            <h3>Episode name : {name}</h3>
            <h3>Episode air_date : {air_date}</h3>
        </div>
    );
};

export default Episode;