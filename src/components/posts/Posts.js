import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import Posts2 from "../posts2/Posts2";
import {postsService} from "../../service";

const Posts = () => {

    const {postId} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getAll(postId).then(({data}) => setPost(data))
    },[postId])

    return (
        <div>
            {post && (<Posts2 post={post}/>)}
        </div>
    )
}
export {Posts};