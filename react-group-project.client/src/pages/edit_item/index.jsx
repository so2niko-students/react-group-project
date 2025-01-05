import EditPostItemComponent from "../../components/EditPostItemComponent.jsx";
import { updatePost, getPost } from "../../httpClients/PostItemClient.jsx";
import { useState } from "React";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function EditPostItem() {
    const { postId } = useParams();
    const [ error, setError ] = useState(null);
    const [ post, setPost ] = useState(null);
    const [success, setSuccess] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();

    async function loadPost(id) {
        try {
            let postRes = await getPost(id);
            if (postRes.error) {
                setError(postRes.error);
            }
            else {
                setPost(postRes.post);
            }
        }
        finally {
            setLoading(false);
        }
       
    }

    if (!post) {
        loadPost(postId);
    }


    async function onEditExecuted(data) {

        const updatedPost = {
            id:post.id,
            title: data.title,
            shortDescription: data.shortDescription,
            fullText: data.fullText,
            image: data.imageFile,
            imageLink: data.imageFile ? null : post.imageLink
        }

        let res = await updatePost(updatedPost);
        if (!res.success) {
            setError(res.error);
        }
        else {
            setSuccess(true);
        }
    }

    if (error)
        return <p className="text-danger">Error: {error}</p>;


    if (success) {
        return (
            <div className="text-center mt-5">
                <h3 className="text-success">Post has been updated successfully!</h3>
                <div className="mt-3">
                    <button
                        className="btn btn-secondary"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </button>
                </div>
            </div>
        );
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (

        <EditPostItemComponent post={ post } onEdit={onEditExecuted} />
    );
}

export default EditPostItem;