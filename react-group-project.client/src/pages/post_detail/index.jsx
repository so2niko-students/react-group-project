import { useParams } from 'react-router-dom';
import { useFetchPost } from "../../httpClient/httpClient.jsx";

const PostDetails = () => {
    const { postId } = useParams();
    const { data: post, loading, error } = useFetchPost(`/postitem/${postId}`);
    
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">Error: {error}</p>}
            {!loading && !error && <h1>Post Details</h1>}
            {!loading && !error && <p>Post ID: {post.id}</p>}
        </div>
    );
};

export default PostDetails;

