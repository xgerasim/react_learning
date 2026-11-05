import { useState } from "react"
import PostItem from "./components/post/PostItem";
import PostContext from "./context/PostContext";

function App() {

  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const [posts, setPosts] = useState([]);

  const [editingPost, setEditingPost] = useState({
    index: null,
    title: '',
    content: '',
  })

  const [errors, setErrors] = useState([]);

  const [isModal, setIsModal] = useState(false);

  const storePost = (e) => {

    e.preventDefault();

    if (validateFields().length > 0) {
      return;
    }

    setPosts([...posts, post]);

    setPost({
      title: '',
      content: '',
    })

    console.log(posts);
  }

  const editPost = (p) => {
    setIsModal(true);
    setEditingPost({
      index: posts.indexOf(p),
      title: p.title,
      content: p.content
    });
  }

  const validateFields = () => {
    const newErrors = [];

    if (post.title === '') {
      newErrors.push({ message: 'title field is required' })
      // setErrors([...errors, { message: 'title field is required' }]);
    }

    if (post.content === '') {
      newErrors.push({ message: 'content field is required' })
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);

    }

    return newErrors;
  }

  const updatePost = (e) => {
    e.preventDefault();


    setPosts(posts.map((post, index) => {
      if (index === editingPost.index) {
        return {
          title: editingPost.title,
          content: editingPost.content
        }
      }
      return post
    }));
    setIsModal(false);

  }

  const deletePost = (p) => {
    const newPosts = posts.filter(postItem => postItem !== p);

    setPosts(newPosts);
  }

  const handlePost = (e) => {
    // console.log(e.target.value);

    setErrors([]);

    const name = e.target.name;
    const value = e.target.value;

    setPost({ ...post, [name]: value })

  };

  const handleEditingPost = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setEditingPost({ ...editingPost, [name]: value })

  };


  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {isModal &&
        <div className="modal-shadow" onClick={() => { setIsModal(false) }}>
          <div className="bg-white p-4 border border-gray-200 w-1/2 mx-auto mb-4" onClick={(e) => e.stopPropagation()} >

            <div className="mb-4">
              <input
                onChange={(e) => handleEditingPost(e)}
                type="text"
                name="title"
                value={editingPost.title}
                className="border border-gray-200 p-4 w-full"
                placeholder="Title" />
            </div>

            <div className="mb-4">
              <textarea
                onChange={(e) => handleEditingPost(e)}
                name="content"
                value={editingPost.content}
                className="border border-gray-200 p-4 w-full" placeholder="Content" />
            </div>

            <div>
              <a
                onClick={(e) => { updatePost(e) }}
                href="#" className="inline-block px-3 py-2 text-white bg-sky-600 border-sky-800 text-xs">UPDATE</a>
            </div>

          </div>
        </div>
      }

      <div className="bg-white p-4 border border-gray-200 w-1/2 mx-auto mb-4">

        <div className="mb-4">
          <input
            onChange={(e) => { handlePost(e) }}
            type="text"
            name="title"
            value={post.title}
            className="border border-gray-200 p-4 w-full"
            placeholder="Title" />
        </div>

        <div className="mb-4">
          <textarea
            name="content"
            onChange={(e) => { handlePost(e) }}
            value={post.content}
            className="border border-gray-200 p-4 w-full" placeholder="Content" />
        </div>
        {errors.length > 0 &&
          <div className="mb-4">
            {errors.map((error, index) => (
              <div key={index} className="text-red-600 text-xs">{error.message}</div>
            ))}
          </div>
        }

        <div>
          <a
            onClick={(e) => { storePost(e) }}
            href="#" className="inline-block px-3 py-2 text-white bg-sky-600 border-sky-800 text-xs">STORE</a>
        </div>

      </div>


      <PostContext value={{ deletePost, editPost }}>
        {posts.map((p, index) => (

          <PostItem key={index} post={p} />





        ))
        }
      </PostContext>
    </div >
  )
}

export default App
