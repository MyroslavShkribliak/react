import {useEffect, useState} from "react";

import {Comment} from "../comment/comment";
import {userInt} from "../../service/user.service";


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        userInt.getAll().then(({data}) => setComments(data))
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