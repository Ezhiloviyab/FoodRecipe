import { Link, useLocation } from "react-router-dom";
import './navbar.css';
import { useState } from "react";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation();
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        },
        {
            name: "Login",
            path: "/login"
        }
    ];

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand me-auto">F<span>oo</span>diesHub</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <span className={showSidebar ? "navbar-toggler-icon active" : "navbar-toggler-icon"}></span>
                </button>

                <div className={"collapse navbar-collapse " + (showSidebar ? "show" : "")}>
                    <ul className="navbar-nav ms-auto">
                        {links.map(link => (
                            <li className="nav-item" key={link.name}>
                                <Link
                                    className={"nav-link " + (location.pathname === link.path ? "active" : "")}
                                    to={link.path}
                                    onClick={() => setShowSidebar(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
