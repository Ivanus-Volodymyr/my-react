import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../service/albums.service";
import UserAlbum from "../UserAlbum/UserAlbum";

const UserAlbums = () => {
    const params = useParams();
    const {id}=params;

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getByUserId(id).then(value => setAlbums([...value]))
    }, [id])

    return (
        <>
            <div className={'Albums'}>
                {albums.map(album => <UserAlbum key={album.id} album={album}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </>

    );
};

export default UserAlbums;