import React, {useEffect, useState} from 'react';

const Albums = () => {
    const [album, setAlbum] = useState();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then(value => value.json())
            .then(value => {
                setAlbum(value)
            })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Albums;