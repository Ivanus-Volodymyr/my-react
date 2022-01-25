import React, {useEffect, useState} from 'react';

import {carsService} from "../../service/cars.service";
import Car from "../Car/Car";
import './Cars.css'

const Cars = ({trigger, update, setUpdateCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll().then(value => setCars([...value]));
    }, [trigger]);

    return (
        <div className={'Cars'}>
            {cars.map(value => <Car key={value.id} car={value} update={update} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
};

export default Cars;