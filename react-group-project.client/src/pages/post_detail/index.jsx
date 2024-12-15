import { useParams } from 'react-router-dom';
import { getPost } from "../../httpClient/httpClient.jsx";
import { useState, useEffect } from "react";

const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                let res = await getPost(postId);
                setError(res.error);
                setPost(res.post);
            }
            finally {
                setLoading(false);
            }
        }
        getData();
    }, [postId]);

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

