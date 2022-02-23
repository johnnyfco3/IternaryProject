import React from "react";
import { Link } from "react-router-dom";
import session from "../session";

export function Navbar(){
    return (
        <div id="Navbar">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/history">Vacay</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars icon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/history">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-adventure">New Adventure</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/friends">Friends</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Log Out</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;