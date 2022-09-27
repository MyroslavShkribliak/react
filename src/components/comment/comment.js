import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, name, email} = comment
    return (
        <div>

           <Link to={comment.postId.toString()}>{id} <br/> {name} <br/> {email}</Link>
        </div>
    )
}
export {Comment};