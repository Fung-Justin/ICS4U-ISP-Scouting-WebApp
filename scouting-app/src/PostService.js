import axios from 'axios';

const url = '/api/posts/';

class PostService {
    //Get Posts
    static async getPosts() {
        const res = await axios.get(url);
        const data = res.data;
        return data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
        }))
    }

    // Create Post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;