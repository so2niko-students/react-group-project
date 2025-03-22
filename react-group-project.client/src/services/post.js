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
            data: newPost,
            headers: {
                 'Content-Type': 'multipart/form-data'
            }
        });
    } catch (error) {
        console.error(error);
    }
}

export const sendFile = (file) => {
    const fData = new FormData();
    fData.append('files', file);
    axios({
        method: 'post',
        url: POST_ITEMS,
        data: fData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(r => console.log(r));
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