import axios from "axios";

//export async function getPost(id) {
//    console.log(id);
//    try {
//        const postItems = "postItems";

//        const url_postItems = `${postItems}`;

//        const response = await axios.get(url_postItems)
//        console.log(response.data)
//        return response.data;

//    } catch (error) {
//        console.error(error);
//    }
//}

export async function getPost(id) {
    console.log(id);
    try {
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

//const response = await axios.get(url_postItems, {
//    params: {
//        id: { id }
//    }
//})