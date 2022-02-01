import React from 'react';
import {useDispatch} from "react-redux";

import './Car.css'
import {carToUpdate, deleteCar} from "../../store";


const Car = ({car}) => {
    const {id, model, price, year} = car
    const dispatch = useDispatch();
    return (
        <div className={'Car'}>
            <h2>{id}</h2>
            <h2>Model: {model}</h2>
            <h2>Price: {price}</h2>
            <h2>Year: {year}</h2>
            <button onClick={() => dispatch(deleteCar({id}))}>Delete</button>
            <button onClick={() => dispatch(carToUpdate({id, car}))}>Update</button>
        </div>
    );
};

export default Car;