import React from 'react';

const Launch = ({name, year, img}) => {
    return (
        <div>
            <h4>{name}</h4>
            <div>{year}</div>
            <img src={img} alt={name}/>

        </div>
    );
};

export default Launch;