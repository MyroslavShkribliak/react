import {Link} from "react-router-dom";

const Headers = () => {
    return (
        <div>
            <h2>
               <ul>
                    <Link to={'albums'}>Album</Link>
                </ul>
                <ul>
                    <Link to={'todos'}>Todo</Link>
                </ul>
                <ul>
                    <Link to={'comments'}>Comments</Link>
                </ul>
            </h2>
        </div>
    );
};

export default Headers;