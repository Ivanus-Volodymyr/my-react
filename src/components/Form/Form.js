import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();

    const submit = () => {
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('model')}/>
                <button>Create</button>
            </form>
        </div>
    );
};

export default Form;