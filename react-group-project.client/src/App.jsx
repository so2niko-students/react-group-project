import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { ToastContainer} from 'react-toastify';

function App() {
    return (
        <>
            <RouterProvider router={router} fallbackElement={<>Loading</>} />
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
    );
}

export default App;