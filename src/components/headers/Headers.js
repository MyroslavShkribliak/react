import {Link} from "react-router-dom";

const Headers = () => {
    return (
        <div>
            <div><Link to={'albums'}>Album</Link></div>
            <div><Link to={'todos'}>Todo</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
        </div>
    );
};

export {Headers};