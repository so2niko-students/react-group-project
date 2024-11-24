import { NavLink, Outlet } from "react-router-dom";
import './Layout.css';

export const Layout = () => {
    return(
        <>
            <nav className="layout-nav" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page"> <NavLink to="/post/1">Post</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page"> <NavLink to="/create">Create</NavLink></li>
                </ol>
            </nav>
            <main><Outlet /></main>
        </>
    )
}