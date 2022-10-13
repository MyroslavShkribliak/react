import {useSelector} from "react-redux";

import css from './style.module.css'
const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer);
    return (
        <div className={css.Header}>
            {
                currentUser && currentUser.name
            }
        </div>
    );
};

export {Header};