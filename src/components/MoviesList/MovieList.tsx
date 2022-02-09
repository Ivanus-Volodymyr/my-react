import React, {FC} from 'react';
import {IResults} from "../../interfaces";

const MovieList: FC<{ result: IResults }> = ({result}) => {
    const {id, original_title, title} = result;
    return (
        <div>
            {id}----{title}
        </div>
    );
};

export default MovieList;