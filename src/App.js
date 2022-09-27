import {
    Routes,
    Route
} from "react-router-dom"

import Home from "./components/home/Home";
import Albums from "./components/albums/Albums";
import Dot from "./components/todos/dot";
import {Posts} from "./components/posts/posts";
import {CommentDetails} from "./components/commentDetails/commentDetails";


const App = () => {
    return (
        <div>
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
