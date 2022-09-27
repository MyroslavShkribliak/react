import {
    Routes,
    Route
} from "react-router-dom"

import {Albums, CommentDetails, Dot, Home, Posts} from "./components";
const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'albums'} element={<Albums/>}/>
                    <Route path={'comments'} element={<CommentDetails/>}>
                        <Route path={':postId'} element={<Posts/>}/>
                    </Route>
                    <Route path={'todos'} element={<Dot/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
