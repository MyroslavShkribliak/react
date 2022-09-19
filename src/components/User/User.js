export function User(props) {
    let {user, userDetailsFn} = props;

    return (
        <div>
            <h2>id - {user.id}</h2>
            <h2>Name - {user.name}</h2>
            <button onClick={() => {
                userDetailsFn(user)
            }}>Click
            </button>
        </div>
    );
}