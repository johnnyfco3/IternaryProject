import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar(){

    let navigate = useNavigate()

    function endSession(){
       localStorage.removeItem('user')
        navigate("/")
    }

    return (
        <div id="Navbar">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {localStorage.getItem("user") ? (
                        <>
                        <Link className="navbar-brand" to="/home">Vacay</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars icon"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`/home`}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add-adventure">New Adventure</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/friends">Friends</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="" onClick={endSession()}>Log Out</a>
                            </li>
                        </ul>
                        </div>
                        </>
                    ) : (
                        <>
                        <Link className="navbar-brand" to="/">Vacay</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars icon"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#design">Features</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                        </div>
                        </>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;