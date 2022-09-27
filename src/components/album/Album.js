const Album = ({album}) => {
    const {id , title} = album
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
        </div>
    );
};

export {Album};