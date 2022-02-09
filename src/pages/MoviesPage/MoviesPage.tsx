import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {getAllMovies} from "../../store";
import MovieList from "../../components/MoviesList/MovieList";
import Buttons from "../../components/Buttons/Buttons";


const MoviesPage = () => {
    const {result, currentPage} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovies(currentPage))
    }, [currentPage])

    return (
        <div>
            {
                result.map(result => <MovieList key={result.id} result={result}/>)
            }
            <Buttons/>
        </div>
    );
};

export default MoviesPage;