import { Layout } from "./components/layout/layout";
import { createBrowserRouter } from "react-router-dom";
import Error from "./components/error/error";
import Home from "./pages/home/"
import PostDetail from "./pages/post_detail/";

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
                path: "/post/:postID",
                element: <PostDetail/>
            },
            {
                path: "/create",
                element: <>Create</>
            }
        ]
    }
]);