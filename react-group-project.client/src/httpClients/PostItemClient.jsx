import axios from "axios";

export async function getPosts() {
    let posts = null;
    let error = null;
    try {
        const response = await axios.get("postitem");

        const formattedData = response.data.map(p => ({
            id: p.id,
            title: p.title,
            shortDescription: p.shortDescription,
            fullText: p.fullText,
            author: `${p.creator.name} ${p.creator.surName}`,
            createDateTime: p.createDateTime,
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
            shortDescription: result.shortDescription,
            fullText: result.fullText,
            author: `${result.creator.name} ${result.creator.surName}`,
            createDateTime: result.createDateTime,
            imageLink: result.imageLink
        };

        post = formattedData;
    } catch (err) {
        return { post: null, error: err.message };
    }
    return { post, error };
}

export async function addPost(data) {
    try {
            await axios.post(`postitem`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return { success: true, error: null };

    } catch (err) {
        return { success: false, error: err.message };
    }
}

export async function updatePost(data) {
    try {
        await axios.put(`postitem`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return { success: true, error: null };

    } catch (err) {
        return { success: false, error: err.message };
    }
}



