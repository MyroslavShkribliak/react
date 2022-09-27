import {useParams} from "react-router-dom";

import {useEffect, useState} from "react";

import Posts2 from "../posts2/posts2";
import {postsService} from "../../service/posts.service";

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