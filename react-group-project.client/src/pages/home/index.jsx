import { useEffect, useState } from 'react';
import { getAllPosts } from "../../services/posts";
import PostItem from '../../components/post_item/post_item';

export default function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const data = await getAllPosts();
            setItems(data);
        }
        getPosts();
    }, []);

    return (
        <div className="container d-flex justify-content-center flex-column">
            {items.map((item) => (<PostItem key={item.id} item={item} />))}
        </div>
    )
}