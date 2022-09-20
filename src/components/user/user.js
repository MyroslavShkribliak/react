const User = (props) => {
    const {user, userAppDate}= props;
    return (
        <div>
            <h2>id - {user.id}</h2>
            <h2>name - {user.name}</h2>
            <button onClick={() => {
                userAppDate(user)
            }}>Click</button>
        </div>
    );
};

export {User};