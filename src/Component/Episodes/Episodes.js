import React, {useEffect} from 'react';
import {rick_and_mortyService} from "../../service/rick_and_morty.service";

const Episodes = () => {

    useEffect(() => {
        rick_and_mortyService.getAll().then(value => console.log(value))
    }, []);

    return (
        <div>

        </div>
    );
};

export default Episodes;