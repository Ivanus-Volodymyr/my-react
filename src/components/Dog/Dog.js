import React from 'react';

import './Dog.css'

const Dog = ({dog, dispatch}) => {
    return (
        <div className={'Dog'}>
            <h3>{dog.dog}</h3>
            <div>
                <button onClick={() => dispatch({type: 'Delete', payload: dog.id})}>Delete</button>
            </div>
        </div>
    );
};

export default Dog;