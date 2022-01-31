import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {charactersService} from "../../service/characters.service";
import Character from "../Character/Character";
import './Characters.css';

const Characters = () => {
    const {idOfEpisode} = useParams();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        charactersService.getById(idOfEpisode).then(value => setCharacters(value))
    }, [idOfEpisode]);


    return (
        <>
            <div className={'CharactersHeader'}>
                <h1>Characters of this Episode</h1>
            </div>
            <div className={'Characters'}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </>
    );
};

export default Characters;