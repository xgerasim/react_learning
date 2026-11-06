import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function Create() {

    const [post, setPost] = useState({
        title: '',
        content: ''
    });

    const storePost = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:3000/posts', post);

        console.log(res);

        setPost({
            title: '',
            content: ''
        });

    }


    const handlePost = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPost({ ...post, [name]: value });
    }



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