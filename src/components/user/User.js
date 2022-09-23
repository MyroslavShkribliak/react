import css from './style.module.css'
const User = ({user}) => {
    return (
        <div className={css.user}>
            <dvv>id:{user.id}</dvv>
            <dvv>name:{user.name}</dvv>
            <div>email:{user.email}</div>
        </div>
    );
};

export {User};

