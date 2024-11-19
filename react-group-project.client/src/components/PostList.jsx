import PostItem from "./PostItem"
import { getAllPosts } from "../services/posts"

export default function PostList({ items = [] }) {
    getAllPosts();
    return (
        <>
            {items.map((item, i) => (<PostItem key={item.title + i} item={item} />))}
        </>
    )
};