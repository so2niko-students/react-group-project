import PostItem from "../post_item/post_item"
import { getAllPosts } from "../../services/posts"

export default function PostList({ items = [] }) {
    getAllPosts();
    return (
        <>
            {items.map((item) => (<PostItem key={item.id} item={item} />))}
        </>
    )
};