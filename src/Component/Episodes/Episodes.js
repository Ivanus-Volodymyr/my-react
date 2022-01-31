import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import {episodesService} from "../../service/episodes.service";
import Episode from "../Episode/Episode";
import './Episodes.css';


const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        episodesService.getById(id).then(value => {
            const episodes = [...value.results];
            setEpisodes(episodes)
        })
    }, [id]);

    return (
        <>
            <div className={'EpisodesHeader'}>
                <h1>Rick and Morty Episodes...!</h1>
            </div>
            <div className={'MainEpisodes'}>
                <div className={'Episodes'}>
                    {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
                </div>
                <div className={'EpisodesButton'}>
                    <Link to={`/episodes/${id >= 1 ? +id - 1 : 1}`}>
                        <button>Prev Page</button>
                    </Link>

                    <Link to={`/episodes/${id <= 3 ? +id + 1 : 3}`}>
                        <button>Next Page</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Episodes;