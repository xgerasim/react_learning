
import PostDelete from "./PostDelete"
import PostEdit from "./PostEdit"

function PostItem({ post, editPost }) {
    return (
        <div className="bg-white p-4 border border-gray-200 w-1/2 mx-auto mb-4 flex justify-between items-center">
            <div>
                <h3 className="text-xl mb-2">{post.title}</h3>
                <div className="text-xs">{post.content}</div>
            </div>


            <PostEdit post={post} />
            <PostDelete post={post} />



        </div>
    )
}

export default PostItem