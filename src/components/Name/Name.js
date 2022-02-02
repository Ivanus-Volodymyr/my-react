import React from 'react';
import {useDispatch} from "react-redux";

import './Name.css';
import {changeStatus, deleteToDo} from "../../store";

const Name = ({todo}) => {
    const {id, name, status} = todo;
    const dispatch = useDispatch();


    return (
        <div className={'todo'}>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <h2 className={status ? 'line': 'none'}>{name}</h2>
            <button onClick={() => dispatch(deleteToDo({id}))}>Delete</button>
        </div>
    );
};

export default Name;