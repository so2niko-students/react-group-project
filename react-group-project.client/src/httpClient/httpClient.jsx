import axios  from "axios";

export async function getPosts() {
    let posts = null;
    let error = null;
    try {
        const response = await axios.get("postitem");

        const formattedData = response.data.map(p => ({
            id: p.id,
            title: p.title,
            description: p.shortDescription,
            authorName: p.creator.Login,
            dateOfCreation: p.createDateTime,
            imageLink: p.imageLink
        }));

        posts = formattedData;
    } catch (err) {
        return { posts: null, error: err.message };
    }
    
    return { posts, error };
}

export async function getPost(postId) {
    let post = null;
    let error = null;
    try {
        const response = await axios.get(`/postitem/${postId}`);
        const result = response.data;
        
        const formattedData = {
            id: result.id,
            title: result.title,
            description: result.shortDescription,
            authorName: result.creator.Login,
            dateOfCreation: result.createDateTime,
            imageLink: result.imageLink
        };

        post = formattedData;
    } catch (err) {
        return { post: null, error: err.message };
    }

    return { post, error };
}
