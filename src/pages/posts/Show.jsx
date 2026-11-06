import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function Index() {

    const { id } = useParams();

    const [post, setPost] = useState({
        id: null,
        title: '',
        content: ''
    });

    const getPost = async () => {
        const res = await axios.get(`http://localhost:3000/posts/${id}`);
        setPost(res.data);

        // console.log
    };

    // getPosts();

    useEffect(() => {
        getPost()
    }, []);

    // console.log(posts);

    return (
        <div>



            <div className="bg-white p4 border border-gray-200 w-full p-4 mb-2.5">
                <h3 className="text-lg mbb-2">{post.title}</h3>
                <p className="text-xs">{post.content}</p>
            </div>


        </div>
    )
}

export default Index