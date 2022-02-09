import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import {IResults} from "../../interfaces";

const MovieList: FC<{ result: IResults }> = ({result}) => {

    const {id, original_title, title} = result;
    return (
        <div>
            <Link to={`/movies/${id}/details`}>
                <div>{id}----{title}</div>
            </Link>
        </div>
    );
};

export default MovieList;