import React, {FC} from 'react';
import {IGenreProp} from "../../interfaces";

import './Genre.css'
import {useAppDispatch} from "../../hooks";
import {setMovieByGenre} from "../../store";

const Genre: FC<{ genres: IGenreProp }> = ({genres}) => {
    const dispatch = useAppDispatch();

    const {id, name} = genres;

    return (
        <div>
            <button className={'GenreButton'} onClick={() =>{}}>{id}---{name}</button>
        </div>
    );
};

export default Genre;