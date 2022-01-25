import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

import {carsService} from "../../service/cars.service";
import './Form.css'

const Form = ({update, updateCar}) => {
    const {id, model, price, year} = updateCar;
    const [formErrors, setFormErrors] = useState({});

    const {
        register, handleSubmit, formState: {errors}, setValue
    } = useForm({resolver: joiResolver(carValidator), mode: 'onTouched'});

    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
    }, [updateCar])

    const submit = async (data) => {
        let newCar;
        try {
            if (id) {
                newCar = carsService.updateById(id, data);
            } else {
                newCar = await carsService.create(data);
            }
            update(newCar);
        } catch (error) {
            setFormErrors(error.response.data);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={'FormBlock'}>
                <div><label>Model : <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span> {errors.model.message}</span>}
                <div><label>Price : <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year : <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <div>
                    <button>{id ? 'Update Car' : 'Create Car'}</button>
                </div>
            </form>
        </div>
    );
};

export default Form;