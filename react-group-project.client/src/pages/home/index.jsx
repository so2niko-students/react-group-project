import PostList from "../../components/post_list/post_list"
import { useEffect, useState } from 'react';
import { getAllPosts } from "../../services/posts";

export default function Home() {
    const [items, setItems] = useState();

    useEffect(() => {
        async function getPosts() {
            const data = await getAllPosts();
            setItems(data);
        }
        getPosts();
    }, []);

    return (
        <div className="container d-flex justify-content-center flex-column">
            <PostList items={items} />
        </div>
    )
}