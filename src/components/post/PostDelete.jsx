import PostContext from "../../context/PostContext";
import { useContext } from "react";

function PostDelete({ post }) {

    const { deletePost } = useContext(PostContext);

    return (
        <div>
            <span
                onClick={() => deletePost(post)}
                className="text-xs text-red-600 ml-2 cursor-pointer">DELETE</span>
        </div>
    )
}

export default PostDelete