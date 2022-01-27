import React from 'react';

import './Cat.css'

const Cat = ({cat, dispatch}) => {
    return (
        <div className={'Cat'}>
            <h2>{cat.cat}</h2>
            <div>
                <button onClick={() => dispatch({type: 'delete', payload: cat.id})}>Delete</button>
            </div>
        </div>
    );
};

export default Cat;