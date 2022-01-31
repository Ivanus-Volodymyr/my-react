import React from 'react';

import './Episode.css';
import {Link} from "react-router-dom";

const Episode = ({episode}) => {
    const {id, name, air_date, characters} = episode;

    const arr = []
    arr.push(characters.map(character => character.split('/').pop()));

    return (
        <div className={'Episode'}>
            <h3>Id : {id}</h3>
            <h3>Episode name : {name}</h3>
            <h3>Episode air_date : {air_date}</h3>
            <Link to={`episode/${arr}/characters`}>
                <button>Episode Details</button>
            </Link>
        </div>
    );
};

export default Episode;