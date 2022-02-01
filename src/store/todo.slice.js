import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todo: [],
    counter: 0,
    status: false
}

const todoSlice = createSlice({
    name:'name',
    initialState,
    reducers:{

    }
});


const todoReducer = todoSlice.reducer;
export default todoReducer;