import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { usePostStore } from '../../store/postStore'


function Index() {

    const { id } = useParams();

    const { getPost, post } = usePostStore();

    useEffect(() => {
        getPost(id)
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