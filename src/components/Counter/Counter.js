import React, {useReducer} from 'react';

import './Counter.css'

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            switch (action.target) {
                case 'count1':
                    return {...state, count1: state.count1 + 1}
                case 'count2':
                    return {...state, count2: state.count2 + 1}
                case 'count3':
                    return {...state, count3: state.count3 + 1}
            }
        case 'dec':
            switch (action.target) {
                case 'count1':
                    return {...state, count1: state.count1 - 1}
                case 'count2':
                    return {...state, count2: state.count2 - 1}
                case 'count3':
                    return {...state, count3: state.count3 - 1}
            }
        case 'reset':
            switch (action.target) {
                case 'count1':
                    return {...state, count1: state.count1 = 8}
                case 'count2':
                    return {...state, count2: state.count2 = 8}
                case 'count3':
                    return {...state, count3: state.count3 = 8}
            }
        default:
            throw new Error('My error')
    }
    return state;
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});
    return (
        <div>
            <div>
                <div className={"Count"}>{state.count1}</div>
                <button onClick={() => dispatch({type: 'inc', target: 'count1'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec', target: 'count1'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset', target: 'count1'})}>RESET</button>
            </div>
            <div>
                <div className={"Count"}>{state.count2}</div>
                <button onClick={() => dispatch({type: 'inc', target: 'count2'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec', target: 'count2'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset', target: 'count2'})}>RESET</button>
            </div>
            <div>
                <div className={"Count"}>{state.count3}</div>
                <button onClick={() => dispatch({type: 'inc', target: 'count3'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec', target: 'count3'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset', target: 'count3'})}>RESET</button>
            </div>
        </div>
    );
};

export default Counter;