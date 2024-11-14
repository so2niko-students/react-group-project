import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return(
        <>
        <main><Outlet /></main>
        <footer>
            <NavLink to ="/">Home</NavLink>
            <NavLink to = "/post/1">Post</NavLink>
            <NavLink to = "/create">Create</NavLink>
        </footer>
        </>
    )
}