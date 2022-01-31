import React from 'react';

import './Character.css'

const Character = ({character}) => {
    const {id, name, gender, image, status} = character
    return (
        <div className={'Character'}>
            <h4>Character Id: {id}</h4>
            <h2>Character name: {name}</h2>
            <h2>Character gender: {gender}</h2>
            <h4>Character status: {status}</h4>
            <img src={image} alt=""/>
        </div>
    );
};

export default Character;