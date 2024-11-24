import PostList from "../../components/PostList";
import { useEffect, useState } from 'react';

export default function Home() {

    const [posts, setPosts] = useState();
    populatePosts();
    


    

    return (

        
        <div className="container d-flex justify-content-center flex-column">
            <PostList  />
        </div>
    )

    async function populatePosts() {
        const response = await fetch('postitem');
        const data = await response.json();
        console.log(data);

        let items = data.map(p => ({
            id: p.Id,
            title: p.Title,
            description: p.ShortDescription,
            authorName: p.Creator.Login,
            dateOfCreation: p.CreateDateTime
        }));

        setPosts(items);
    }
}