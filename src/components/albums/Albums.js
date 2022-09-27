import React, {useEffect, useState} from 'react';
import {userService} from "../../service/user.service";
import Album from "../album/Album";

const Albums = () => {
    const [album, setAlbum] = useState([]);
    useEffect(() => {
        userService.getAll()
            .then(({data}) => setAlbum(data))
    },[])
    return (
        <div>
            {
                album.map((album, index) => (<Album key={index} album={album}/>))
            }
        </div>
    );
};

export default Albums;