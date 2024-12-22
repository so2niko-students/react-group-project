import axios from "axios";

export async function getPost(id) {
    try {
        const postItems = "postItems";
        const url_postItem = `/${postItems}/${id}`;

        const response = await axios.get(url_postItem);
        return response.data;

    } catch (error) {
        console.error(error);
    }
}