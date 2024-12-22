import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services/post";

export default function PostDetail() {
    const { postID } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        async function getOnePost() {
            const data = await getPost(postID);
            setItem(data);
        }
        getOnePost();
    }, [postID]);

    return (
        <div className="container mx-auto pt-6">
            <h1 className="text-3xl">{item.title}</h1>
            <div className="mb-4 mt-2"><span className="mr-8">{item.authorName}</span><span>{item.dateOfCreation}</span></div>
            <div>{item.description}</div>
        </div>
    )
}
