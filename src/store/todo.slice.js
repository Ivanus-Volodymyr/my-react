import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: [],
        counter: 0,
        done: 0
    },
    reducers: {
        createToDo: (state, action) => {
            state.todo.push({
                id: new Date().getTime(),
                ...action.payload.data,
                status: false,
                counter: state.counter++
            });
        },
        deleteToDo: (state, action) => {
            const filter = state.todo.filter(to => to.id !== action.payload.id);
            state.todo = filter
            counter: state.counter--;
            if (state.todo.status === true) {
                done:state.done--
            } else {
                state.done = (filter.filter(value => value.status === true)).length
            }
        },
        changeStatus: (state, action) => {
            const findTodo = state.todo.find(todo => todo.id === action.payload.id);
            findTodo.status = !findTodo.status;
            if (findTodo.status === true) {
                done:state.done++
            } else {
                done:state.done--
            }
        }
    }
});


const todoReducer = todoSlice.reducer;

export const {createToDo, deleteToDo, changeStatus} = todoSlice.actions;
export default todoReducer;