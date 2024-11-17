import { RouterProvider } from "react-router-dom";
import store from './redux/ReduxStore.jsx';
import { router } from "./routing";

function App() {
    return (
        <>
            <RouterProvider router={router} store={store} fallbackElement={<>Loading</>}/>
        </>
    );
}

export default App;