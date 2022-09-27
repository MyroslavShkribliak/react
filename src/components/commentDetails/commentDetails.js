import {Outlet} from "react-router-dom";
import {Comments} from "../comments/comments";

const CommentsPage = () => {

    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    )
}
export {CommentsPage};