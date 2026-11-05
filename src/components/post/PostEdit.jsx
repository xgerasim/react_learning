import PostContext from "../../context/PostContext";
import { useContext } from "react";

function PostEdit({ post }) {

    const { editPost } = useContext(PostContext);

    return (

        <div>
            <span
                onClick={() => editPost(post)}
                className="text-xs text-emerald-600 cursor-pointer">EDIT</span>
        </div>
    )
}

export default PostEdit