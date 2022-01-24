import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photosService} from "../../service/photos.service";
import AlbumPhoto from "../AlbuumPhoto/AlbumPhoto";

const AlbumsPhotos = () => {
    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photosService.getByAlbumId(albumId).then(value => setPhotos([...value]))
    }, [albumId]);

    return (
        <>
            {photos.map(value => <AlbumPhoto key={value.id} photo={value}/>)}
        </>
    );
};

export default AlbumsPhotos;