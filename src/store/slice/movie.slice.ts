import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGenreProp, IMovie, IResults} from "../../interfaces";
import {moviesServices} from "../../services";
import {genresServices} from "../../services/genres.services";

interface IMoviesState {
    movies: IMovie;
    result: IResults[];
    currentPage: number;
    total_pages: number;
    genre: IGenreProp[];
    genreId: string
}

const initialState: IMoviesState = {
    movies: {},
    result: [],
    currentPage: 1,
    total_pages: 1,
    genre: [],
    genreId: '',
}

export const getAllMovies = createAsyncThunk(
    'movie/getAllMovies',
    async (currentPage: number, {dispatch, getState}) => {
        const state = getState() as { movieReducer: IMoviesState };

        const {data} = await moviesServices.getAll(currentPage, state.movieReducer.genreId);
        if (data.results && data.total_pages) {
            dispatch(setMovies({result: data.results, total: data.total_pages}))
        }
    }
)

export const getAllGenres = createAsyncThunk(
    'movie/getAllGenres',
    async (_, {dispatch}) => {
        const {data} = await genresServices.getAll();
        if (data.genres) {
            dispatch(setGenre({genre: data.genres}))
        }
    }
);


const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<{ result: IResults[], total: number }>) => {
            state.result = action.payload.result
            state.total_pages = action.payload.total
        },
        setPage: (state, action) => {
            if (state.currentPage >= 1 && state.currentPage <= state.total_pages) {
                state.currentPage += action.payload;
            } else if (state.currentPage < 1) {
                state.currentPage = 1;
            } else if (state.currentPage > state.total_pages) {
                state.currentPage = state.total_pages;
            }
        },
        setGenre: (state, action: PayloadAction<{ genre: IGenreProp[] }>) => {
            state.genre = action.payload.genre
        },
        setMovieByGenre: (state, action: PayloadAction<{ id: IGenreProp }>) => {

        }
    }
});

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {setMovies, setPage, setGenre, setMovieByGenre} = movieSlice.actions;