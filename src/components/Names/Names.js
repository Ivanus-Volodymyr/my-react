import React from 'react';
import {useSelector} from "react-redux";

import Name from "../Name/Name";


const Names = () => {
    const {todo} = useSelector(state => state['todoReducer']);

    return (
        <div>
            {todo.map(value => <Name key={value.id} todo={value}/>)}
        </div>
    );
};

export default Names;