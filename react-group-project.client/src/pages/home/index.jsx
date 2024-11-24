import PostList from "../../components/post_list/post_list"
//import { items } from "../../data"
import { useEffect, useState } from 'react';

export default function Home() {
    const [items, setItems] = useState();

    useEffect(() => {
        getItems();
    }, []);

    async function getItems() {
        const response = await fetch('postItems');
        const items = await response.json();
        setItems(items);
    }

    return (
        <div className="container d-flex justify-content-center flex-column">
            <PostList items={items} />
        </div>
    )
}