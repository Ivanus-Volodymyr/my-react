import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {carsService} from "../../service/cars.service";

const Form = () => {
    const [formErrors, setFormErrors] = useState({});

    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm();

    const submit = (data) => {
        carsService.create(data).then(value => console.log(value)).catch(error => setFormErrors(error.response.data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model : <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {formErrors.model && <span>{formErrors.model.message}</span>}
                <div><label>Price : <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {formErrors.price && <span>{formErrors.price.message}</span>}
                <div><label>Year : <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {formErrors.year && <span>{formErrors.year.message}</span>}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;