import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

import {carsService} from "../../service/cars.service";

const Form = ({update}) => {
    const [formErrors, setFormErrors] = useState({});

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: 'onTouched'});

    const submit = async (data) => {
        try {
            const newCar = await carsService.create(data);
            update(newCar);
        } catch (error) {
            setFormErrors(error.response.data);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model : <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span> {errors.model.message}</span>}
                <div><label>Price : <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year : <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;