import React from 'react';

import './Car.css';
import {carsService} from "../../service/cars.service";

const Car = ({car, update, setUpdateCar}) => {
    const {id, price, model, year} = car;

    const deleteCar = async () => {
        await carsService.deleteById(id);
        update({})
    }

    return (
        <div className={'Car'}>
            <div><h3>Id : {id}</h3></div>
            <div><h4>Price : {price}</h4></div>
            <div><h5>Model : {model}</h5></div>
            <div><h5>Year : {year}</h5></div>
            <button onClick={() => deleteCar()}>Delete this Car</button>
            <button onClick={() => setUpdateCar(car)}>Update this Car</button>
        </div>
    );
};

export default Car;