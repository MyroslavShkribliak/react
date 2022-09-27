const todo = ({todo}) => {
    const {id , title} = todo
    return (
        <div>
            {id}--{title}
        </div>
    );
};

export default todo;