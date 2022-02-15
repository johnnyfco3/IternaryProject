import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NYC from "../Images/triston-dunn-rfj_wOYQkus-unsplash.jpg";
import Venice from "../Images/karsten-wurth-uZt8wD1rgeo-unsplash.jpg";
import Sydney from "../Images/dan-freeman-7Zb7kUyQg1E-unsplash.jpg";

export function History(){
    return (
        <div id="history">
            <Navbar />
            <div className="container">
                <div className="top-content text-center pt-4">
                    <h2>Good Morning Johnny</h2>
                    <blockquote>Let's make today a memorable one!
                        <cite> - Johnny T</cite>
                    </blockquote>
                </div>
                
                <section className="current row pt-5">
                    <h1 className="heading pb-4">Current Adventures</h1>
                    <div className="col-6">
                        <Link to="/overview"><div className="card">
                            <img src={NYC} alt="Current Travels"/>
                        </div>
                        <div className="card-content">
                            <h1 className="title">New York</h1>
                            <h3 className="subtitle">New York City</h3>
                            <p>11 Jun - 03 Jul 2021</p>
                        </div></Link>
                    </div>
                </section>

                <section className="past row pt-5">
                    <h1 className="heading pb-4">Past Adventures</h1>
                    <div className="col-6">
                        <a href="#"><div className="card">
                            <img src={Sydney} alt="Current Travels"/>
                        </div>
                        <div className="card-content">
                            <h1 className="title">Australia</h1>
                            <h3 className="subtitle">Sydney</h3>
                            <p>20 Feb - 3 March 2021</p>
                        </div></a>
                    </div>
    
                    <div className="col-6">
                        <a href="#"><div className="card">
                            <img src={Venice} alt="Current Travels"/>
                        </div>
                        <div className="card-content card-content">
                            <h1 className="title">Italy</h1>
                            <h3 className="subtitle">Venice</h3>
                            <p>25 Dec - 31 Jan 2021</p>
                        </div></a>
                    </div>
                </section>

                <section className="add-new text-center mt-5 px-4">
                    <button className="btn">Start New Adventure</button>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default History;