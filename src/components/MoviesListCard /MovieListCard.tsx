import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {moviesServices} from "../../services";

const MovieListCard: FC = () => {
    const {id} = useParams();

    useEffect(() => {

    }, [id])
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default MovieListCard;