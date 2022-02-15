import React from "react";
import { Link } from "react-router-dom";

export function Navbar(){
    return (
        <div id="Navbar">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/history">Vacay</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/history">Home</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">New Adventure</a>
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