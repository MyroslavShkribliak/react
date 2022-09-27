import {useEffect, useState} from "react";

import {Comment} from "../comment/comment";
import {postsService as commentService} from "../../service/posts.service";


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    },[])

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    )
}
export {Comments};