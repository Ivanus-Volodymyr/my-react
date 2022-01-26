import React, {useEffect, useState} from 'react';
import {episodesService} from "../../service/episodes.service";


const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        episodesService.getAll().then(value => {
            const episodes = [...value.results];
            setEpisodes(episodes)
        })
    }, []);

    return (
        <div>
            {episodes.map(episode => {})}
        </div>
    );
};

export default Episodes;