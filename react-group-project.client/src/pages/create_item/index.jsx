import CreatePostItemComponent from "../../components/CreatePostItemComponent.jsx";
import { addPost } from "../../httpClients/PostItemClient.jsx";
import { useState } from "React";

function CreatePostItem() {
    const { error, setError } = useState(null);
    

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
        if (!res.success)
            setError(res.error);
    }

    if (error)
        return <p className="text-danger">Error: {error}</p>;


    return (
        <CreatePostItemComponent onCreate={onCreateExecuted} />
    );
}

export default CreatePostItem;