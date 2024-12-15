import PostList from "../../components/PostList";
import { getPosts } from "../../httpClient/httpClient.jsx";
import { useState, useEffect } from "react";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                let res = await getPosts();
                if (res.error) {
                    setError(res.error);
                    setPosts([]); 
                } else {
                    setError(null);
                    setPosts(res.posts);
                }
            }
            finally {
                setLoading(false);
            }
        }
        getData();
    }, []);
    
    return (
        <div className="container d-flex justify-content-center flex-column">
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">Error: {error}</p>}
            {!loading && !error && <PostList items={posts} />}
        </div>
    )
}