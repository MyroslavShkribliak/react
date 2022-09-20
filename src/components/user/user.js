const User = (props) => {
    const {user, userDetailsFn}= props;
    return (
        <div>
            <h2>id -- {user.id}</h2>
            <h2>name -- {user.name}</h2>
            <button onClick={() => {
                userDetailsFn(user)
            }}>Click</button>
        </div>
    );
};

export {User};