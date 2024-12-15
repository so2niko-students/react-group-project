import { Layout } from "./Layout";
import { createBrowserRouter } from "react-router-dom";
import Error from "./error";
import Home from "./pages/home/index"
import PostDetails from "./pages/post_detail/index"
import CreatePostItem from "./pages/create_item/index"

export const router= createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children:[
            {
                element: <Home/>,
                index: true
            },
            {
                path: "/post/:postId",
                element: <PostDetails />
            },
            {
                path: "/create",
                element: <CreatePostItem />
            }
        ]
    }
]);