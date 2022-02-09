import React, {FC, useEffect} from 'react';
import {IGenreProp} from "../../interfaces";

import './Genre.css'
import {useAppDispatch} from "../../hooks";
import {setMovieByGenreId} from "../../store";

const Genre: FC<{ genres: IGenreProp }> = ({genres}) => {
    const dispatch = useAppDispatch();
    const {id, name} = genres;


    return (
        <div>
            <button className={'GenreButton'}
                    onClick={() => dispatch(setMovieByGenreId({genres}))}>
                {id}---{name}
            </button>
        </div>
    );
};

export default Genre;