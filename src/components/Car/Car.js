import React from 'react';

import './Car.css'

const Car = ({car: {id, model, price, year}}) => {

    return (
        <div className={'Car'}>
            <h2>{id}</h2>
            <h2>Model: {model}</h2>
            <h2>Price: {price}</h2>
            <h2>Year: {year}</h2>
            <button onClick={()=>{}}>Delete</button>
        </div>
    );
};

export default Car;