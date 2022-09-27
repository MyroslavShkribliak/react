import {Outlet} from "react-router-dom";
import {Comments} from "../comments/comments";

const CommentDetails = () => {

    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    )
}
export {CommentDetails};