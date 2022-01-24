import React from 'react';

import './AlbumPhoto.css'

const AlbumPhoto = ({photo: {albumId, id, title, url, thumbnailUrl}}) => {
    return (
        <div className={'AlbumPhoto'}>
            <h3>AlbumId : {albumId}</h3>
            <h3>Id : {id}</h3>
            <h4>Title : {title}</h4>
            <div><img src={url} alt={title}/></div>
            <div><img src={thumbnailUrl} alt={title}/></div>
        </div>
    );
};

export default AlbumPhoto;