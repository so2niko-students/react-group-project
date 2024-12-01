import PostList from "../../components/PostList";
import { useFetchPosts } from "../../httpClient/httpClient.jsx";

export default function Home() {

    const { data: posts, loading, error } = useFetchPosts("postitem");
    return (
        <div className="container d-flex justify-content-center flex-column">
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">Error: {error}</p>}
            {!loading && !error && <PostList items={posts} />}
        </div>
    )
}