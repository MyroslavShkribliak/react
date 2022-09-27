const Posts2 = ({posts}) => {
    const {id , title, body} = posts
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Posts2;