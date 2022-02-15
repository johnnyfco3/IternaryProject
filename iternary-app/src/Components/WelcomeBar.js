import React from "react";
import { Link } from "react-router-dom";

export function WelcomeBar(){
    return (
        <div id="welcome-bar">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">Vacay</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/login">Sign In</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default WelcomeBar;