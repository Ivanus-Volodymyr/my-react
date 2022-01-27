import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import {episodesService} from "../../service/episodes.service";
import Episode from "../Episode/Episode";
import './Episodes.css'


const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});
    const {id} = useParams();

    useEffect(() => {
        episodesService.getById(id).then(value => {
            const episodes = [...value.results];
            const info = {...value.info};
            setEpisodes(episodes)
            setInfo({...info})
        })
    }, [id]);

    return (
        <>
            <div className={'Episodes'}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div>
                <Link to={`/episodes/${+id - 1}`}>
                    <button>Prev Page</button>
                </Link>

                <Link to={`/episodes/${+id + 1}`}>
                    <button>Next Page</button>
                </Link>

                <button onClick={() => console.log(info)}>Info</button>
            </div>
        </>
    )
        ;
}

export default Episodes;