import { getItem, getItems } from "./HttpClient.jsx";

export async function getPosts() {
    const result = await getItems("postitem");
    return { posts: result.data, error: result.error };
}

export async function getPost(postId) {
    const result = await getItem(`/postitem/${postId}`);
    return { post: result.data, error: result.error };
}

