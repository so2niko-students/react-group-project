import { Layout } from "./Layout";
import { createBrowserRouter } from "react-router-dom";
import Error from "./error";
import Home from "./pages/home/index"

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
                element: <>Post</>
            },
            {
                path: "/create",
                element: <>Create</>
            }
        ]
    }
]);