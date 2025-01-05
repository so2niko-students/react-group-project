import axios from "axios";

const POST_ITEMS = "/postItems";

export async function getPost(id) {
    try {
        const url_postItem = `${POST_ITEMS}/${id}`;

        const response = await axios.get(url_postItem);
        return response.data;

    } catch (error) {
        console.error(error);
    }
}

export async function createPost(newPost) {
    try {
        return axios({
            method: 'post',
            url: POST_ITEMS,
            data: newPost
        });
    } catch (error) {
        console.error(error);
    }
}

export async function getAllPosts() {
    try {
        const response = await axios.get(POST_ITEMS)
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}