import React from 'react';

import './Car.css'

const Car = ({car: {id, price, model, year}}) => {

    return (
        <div className={'Car'}>
            <div><h3>Id : {id}</h3></div>
            <div><h4>Price : {price}</h4></div>
            <div><h5>Model : {model}</h5></div>
            <div><h5>Year : {year}</h5></div>
        </div>
    );
};

export default Car;