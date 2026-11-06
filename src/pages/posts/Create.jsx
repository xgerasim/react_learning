import { useEffect } from "react";
import { usePostStore } from "../../store/postStore";

function Create() {

    const { storePost, handlePost, post, setPost } = usePostStore();

    useEffect(() => {
        setPost({
            title: '',
            content: '',
        })
    }, []);

    return (
        <div>

            <div className="bg-white p4 border border-gray-200 w-full p-4 mb-2.5">
                <div className="mb-4">
                    <input
                        onChange={(e) => handlePost(e)}
                        placeholder="Title"
                        type="text"
                        value={post.title}
                        name="title"
                        className="border border-gray-200 p-4 w-full" />
                </div>
                <div className="mb-4">
                    <textarea
                        onChange={(e) => handlePost(e)}
                        placeholder="Content"
                        value={post.content}
                        name="content"
                        className="border border-gray-200 p-4 w-full" >

                    </textarea>
                </div>
                <div className="mb-4">
                    <a href="#" onClick={(e) => { storePost(e) }} className="inline-block px-2 py-2 bg-sky-700 text-white text-xs border">STORE</a>
                </div>
            </div>


        </div>
    )
}

export default Create