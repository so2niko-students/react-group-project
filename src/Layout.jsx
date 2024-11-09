import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return(
        <>
        <main><Outlet/></main>
        <footer>
            <NavLink to="/">Home</NavLink><span> </span>
            <NavLink to="/page1">Page1</NavLink>
        </footer>
        </>
    );
}