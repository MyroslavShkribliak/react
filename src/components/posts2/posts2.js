const Posts2 = ({post}) => {
    const {id , title, body} = post
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Posts2;