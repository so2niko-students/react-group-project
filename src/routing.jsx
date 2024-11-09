import { Layout } from "./Layout";
import { createBrowserRouter } from "react-router-dom";
import Error from "./error";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        errorElement: <Error/>,
        children: [
            {
                element: <>Home</>,
                index: true
            },
            {
                path: "/page1",
                element: <>Page1</>
            }
        ]
    }
]);