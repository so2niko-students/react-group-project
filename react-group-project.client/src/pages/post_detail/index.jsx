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
    }, []);

    return (<>
        <h1></h1>
        <div>PostDetail</div>
        
    </>
    )
}