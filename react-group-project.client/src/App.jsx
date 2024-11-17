import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import PostList from "./components/PostList.jsx";

function App() {
    return (
        <>
            <RouterProvider router={router} fallbackElement={<>Loading</>}/>
        </>
    );
}

export default App;