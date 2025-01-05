import axios from "axios";
export async function getAllPosts() {
    try
    { 
        const postItems = "postItems";

        const url_postItems = `${postItems}`;

        const response = await axios.get(url_postItems)
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}