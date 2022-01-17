import React, {useEffect, useState} from 'react';

import {carsService} from "../../service/cars.service";
import Car from "../Car/Car";
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll().then(value => setCars([...value]));
    }, []);

    return (
        <div className={'Cars'}>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;