import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGenreProp, IMovie, IResults} from "../../interfaces";
import {moviesServices} from "../../services";
import {genresServices} from "../../services/genres.services";
import {IMovieDetailsInterface} from "../../interfaces/movie.details.interface";

interface IMoviesState {
    movies: IMovie;
    result: IResults[];
    currentPage: number;
    total_pages: number;
    genre: IGenreProp[];
    genreId: string;
    movieDetails: IMovieDetailsInterface;
}

const initialState: IMoviesState = {
    movies: {},
    result: [],
    currentPage: 1,
    total_pages: 1,
    genre: [],
    genreId: '',
    movieDetails: {}
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

export const getMovieById = createAsyncThunk(
    'movie/getMovieById',
    async (id: number, {dispatch}) => {
        const {data} = await moviesServices.getById(id);
        if (data) {
            dispatch(setMovieDetails({data}))
        }
    }
);

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
        setMovieByGenreId: (state, action: PayloadAction<{ genres: IGenreProp }>) => {
            if (action.payload.genres.id) {
                state.genreId = action.payload.genres.id
            }
        },
        setMovieDetails: (state, action: PayloadAction<{ data: IMovieDetailsInterface }>) => {
            state.movieDetails = action.payload.data
        }
    }
});

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {setMovies, setPage, setGenre, setMovieByGenreId, setMovieDetails} = movieSlice.actions;