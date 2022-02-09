import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres} from "../../store";
import Genre from "../Genre/Genre";

const GenreBadge: FC = () => {
    const {genre, genreId} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch, genreId])
    return (
        <div>
            <h1>Genre</h1>
            {genre.map(value => <Genre key={value.id} genres={value}/>)}
        </div>
    );
};

export default GenreBadge;