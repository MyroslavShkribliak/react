import {
    Routes,
    Route, Link
} from "react-router-dom"

import Home from "./components/home/Home";
import Albums from "./components/albums/Albums";
import Dot from "./components/todos/dot";
import {Posts} from "./components/posts/posts";
import {CommentDetails} from "./components/commentDetails/commentDetails";


const App = () => {
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
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'comments'} element={<CommentDetails/>}>
                    <Route path={':postId'} element={<Posts/>}/>
                </Route>
                <Route path={'todos'} element={<Dot/>}/>
            </Routes>
        </div>
    );
};

export {App};
