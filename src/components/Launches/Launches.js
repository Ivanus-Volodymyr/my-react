import React, {useEffect, useState} from 'react';


import '../../App.css'
import Launch from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(resolve => resolve.json())
            .then(value => setLaunches(value.filter(value=>value.launch_year!=='2020')))
    }, []);

    return (
        <div>
            {launches.map(value => <Launch name={value.mission_name} year={value.launch_year} img={value.links.mission_patch_small}/>)}
        </div>
    );
};

export default Launches;