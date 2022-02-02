import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import './Form.css'
import {createToDo} from "../../store";

const Form = () => {
    const {counter, done} = useSelector(state => state['todoReducer']);
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createToDo({data}))
        reset()
    }
    return (
        <div>
            <div className={'Header'}>
                <h1>All: {counter}</h1>
                <form onSubmit={handleSubmit(submit)} className={'Form'}>
                    <input type="text" {...register('name')} placeholder={'To Do'}/>
                    <button>Save</button>
                </form>
                <h1>Done:{done}</h1>
            </div>
            <hr/>
        </div>
    );
};

export default Form;