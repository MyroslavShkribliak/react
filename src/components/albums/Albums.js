import React, {useEffect, useState} from 'react';

import {Album} from "../album/Album";
import {userService} from "../../service";
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

export {Albums};