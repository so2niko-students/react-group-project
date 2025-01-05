import CreatePostItemComponent from "../../components/CreatePostItemComponent.jsx";
import { addPost } from "../../httpClients/PostItemClient.jsx";
import { useState } from "React";
import { useNavigate } from "react-router-dom";

function CreatePostItem() {
    const { error, setError } = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    

    async function onCreateExecuted(data) {

        const newPost = {
            title: data.title,
            shortDescription: data.shortDescription,
            fullText: data.fullText,
            creatorId: 1,
            createDateTime: new Date().toISOString(),
            image: data.imageFile
        }
       
        let res = await addPost(newPost);
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
                <h3 className="text-success">Post has been created successfully!</h3>
                <div className="mt-3">
                    <button
                        className="btn btn-primary me-3"
                        onClick={() => setSuccess(false)}
                    >
                     Create post
                    </button>
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
        return (
            <CreatePostItemComponent onCreate={onCreateExecuted} />
        );
}

export default CreatePostItem;