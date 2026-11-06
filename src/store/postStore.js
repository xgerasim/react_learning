import { create } from "zustand";
import axios from "axios";

export const usePostStore = create((set, get) => ({


    posts: [],
    post: {
        title: '',
        content: ''
    },
    setPost: newPost => set(() => ({ post: newPost })),
    setPosts: newPosts => set(() => ({ posts: newPosts })),
    getPosts: async () => {
        const res = await axios.get('http://localhost:3000/posts');
        get().setPosts(res.data);
    },
    getPost: async (id) => {
        const res = await axios.get(`http://localhost:3000/posts/${id}`);
        get().setPost(res.data);

        // console.log
    },
    storePost: async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:3000/posts', get().post);

        console.log(res)

        get().setPost({
            title: '',
            content: ''
        });

    },
    handlePost: (e) => {
        const name = e.target.name;
        const value = e.target.value;

        get().setPost({ ...get().post, [name]: value });
    },
    updatePost: async (e) => {
        e.preventDefault();

        const res = await axios.patch(`http://localhost:3000/posts/${get().post.id}`, get().post);
        console.log(res);
    },
    deletePost: async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/posts/${id}`);

            const newPosts = get().posts.filter(postItem => postItem.id !== id);

            console.log(res);

            get().setPosts(newPosts);
        } catch (e) {
            console.log(e)
        }


    }


}));