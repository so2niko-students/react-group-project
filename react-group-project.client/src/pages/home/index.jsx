import { useEffect, useState } from 'react';
import PostItem from '../../components/post_item/post_item';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/loader/loader';
import { getAllPosts } from '../../services/post';

export default function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        async function getPosts() {
            const data = await getAllPosts();

            setItems(data);
            setIsLoading(false);
            toast('data is loaded')
        }
        getPosts();
    }, []);

    return (<>
        <div className="container d-flex justify-content-center items-center justify-items-center flex-column min-h-96">
            {
                isLoading ?
                    (<Loader />)
                        : items.map((item) => <PostItem key={item.id} item={item} />)
            }
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </>
    )
}