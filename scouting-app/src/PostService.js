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
    static insertPost(match) {
        return axios.post(url, {
            compID: match.compID,
            matchNumber: match.matchNumber,
            teamNumber: match.teamNumber,
            playoff: match.playoff,
            flipped: match.flipped,
            events: match.events,
            climb: match.climb,
            defense: match.defense,
            comments: match.comments,
            scoutName: match.scoutName
        });
    }

    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }

    // Get single Post
    static getPost(id) {
        return axios.get(`${url}${id}`);
    }
}

export default PostService;