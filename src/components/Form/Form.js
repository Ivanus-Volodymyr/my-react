import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCar} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    const submit = (data) => {
        if (carForUpdate) {
            dispatch(updateCar({id: carForUpdate.id, car: data}))
        } else {
            dispatch(createCar(data));
        }
        reset();
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                Model : <input type="text" {...register('model')}/>
                Price : <input type="text" {...register('price')}/>
                Year: <input type="text" {...register('year')}/>
                <button>{carForUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Form;