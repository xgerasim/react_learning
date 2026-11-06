import axios from "axios";
import { useEffect, useState } from "react"
import { generatePath, Link } from "react-router-dom";

import { ROUTES } from "../../routes/routes";

function Index() {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await axios.get('http://localhost:3000/posts');
        setPosts(res.data);

        // console.log
    };


    useEffect(() => {

        getPosts()
    }, []);

    const deletePost = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/posts/${id}`);

            const newPosts = posts.filter(postItem => postItem.id !== id);

            setPosts(newPosts);
        } catch (e) {
            console.log(e)
        }


    }

    return (
        <div>
            <div className="mb-4">
                <Link to={ROUTES.POST_CREATE} className="inline-block px-2 py-2 bg-sky-700 text-white text-xs border">CREATE</Link>
            </div>
            {posts.map(post => (
                <div className="bg-white p4 border border-gray-200 w-full p-4 mb-2.5 flex justify-between items-center" key={post.id}>
                    <div>
                        <h3 className="text-lg mbb-2">
                            <Link to={generatePath(ROUTES.POST_SHOW, { id: post.id })}>{post.title}</Link>
                        </h3>
                        <p className="text-xs">{post.content}</p>
                    </div>
                    <div>
                        <div>
                            <Link to={generatePath(ROUTES.POST_EDIT, { id: post.id })} className="text-green-600">Edit</Link>
                        </div>
                        <div>
                            <a className="text-red-600" onClick={() => deletePost(post.id)}>Delete</a>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default Index