import { useParams } from 'react-router-dom';
import { getPost } from "../../httpClients/PostItemClient.jsx";
import { useState, useEffect } from "react";
import PostDetailsContent from "../../components/PostDetailsContent.jsx";

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

    if (loading)
        return <p>Loading...</p>;

    if (error)
        return <p className="text-danger">Error: {error}</p>;

    return (
        <PostDetailsContent post={ post }/>
    );
};

export default PostDetails;