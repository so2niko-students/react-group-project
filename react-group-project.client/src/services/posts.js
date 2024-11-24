import axios from "axios";

export function getAllPosts() {
    const postItems = "postItems";

    const url_postItems = `${postItems}`;

    axios.get(url_postItems).then(function (response) {
        console.log(response);
    })
}