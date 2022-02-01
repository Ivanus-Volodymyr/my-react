import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {carsService} from "../services";

const initialState = {
    cars: [],
    status: null,
    error: null,
    car: {},
    carForUpdate: null
}

export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carsService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const createCar = createAsyncThunk(
    'cars/createCar',
    async (data, {rejectWithValue}) => {
        try {
            return await carsService.addCar(data)
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const deleteCar = createAsyncThunk(
    'cars/deleteCar',
    async ({id}) => {
        try {
            await carsService.deleteById(id)
            return id
        } catch (e) {
            console.log(e)
        }
    }
)
export const updateCar = createAsyncThunk(
    'cars/updateCar',
    async ({id, car}) => {
        try {
            const newCar = await carsService.updateById(id, car);
            return {car: newCar}
        } catch (e) {
            console.log(e)
        }
    }
)


const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
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
        [createCar.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
        },
        [deleteCar.fulfilled]: (state, action) => {
            state.cars = state.cars.filter(value => value.id !== action.payload)
        },
        [updateCar.fulfilled]: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.car.id);
            state.cars[index] = action.payload.car
            state.carForUpdate = null
        }

    }
})

const carReducer = carSlice.reducer;
export const {carToUpdate} = carSlice.actions;

export default carReducer;