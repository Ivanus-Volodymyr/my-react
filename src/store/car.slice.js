import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {carsService} from "../services";

const initialState = {
    cars: [],
    status: null,
    error: null,
    car: {}
}

export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carsService.getAll()
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const createCar = createAsyncThunk(
    'cars/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carsService.addCar(data);
            dispatch(addCar({data: newCar}))

        } catch (e) {
            console.log(e)
        }
    }
)

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                ...action.payload.data

            })
        },
        delCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        updateCar: (sate, action) => {

        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {

        },
        // [createCar.fulfilled]:()={}
    }
})

const carReducer = carSlice.reducer;

export const {addCar, delCar} = carSlice.actions;
export default carReducer;