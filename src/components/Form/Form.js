import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCar} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addCar({data}));

        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                Model : <input type="text" {...register('model')}/>
                Price : <input type="text" {...register('price')}/>
                Year: <input type="text" {...register('year')}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;