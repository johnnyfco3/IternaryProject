import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NYC from "../Images/triston-dunn-rfj_wOYQkus-unsplash.jpg";
import Venice from "../Images/karsten-wurth-uZt8wD1rgeo-unsplash.jpg";
import Sydney from "../Images/dan-freeman-7Zb7kUyQg1E-unsplash.jpg";

export function History(){

    const [adventures, setAdventures] = useState([
        { country: "New York", city: "New York City", startD: "11 Jun", endD: "3 Jul", background: "../Images/triston-dunn-rfj_wOYQkus-unsplash.jpg", current: true },
        { country: "Australia", city: "Sydney", startD: "20 Feb", endD: "3 March", background: "../Images/dan-freeman-7Zb7kUyQg1E-unsplash.jpg", current: false },
        { country: "Italy", city: "Venice", startD: "25 Dec", endD: "31 Jan", background: "../Images/karsten-wurth-uZt8wD1rgeo-unsplash.jpg", current: false },
        
    ])

    return (
        <div id="history">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main>
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
                        <Link to="/add-adventure"><button className="btn">Start a New Adventure</button></Link>
                    </section>
                </main>
            
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default History;

// // <Link to="/overview">{adventures.map((trip,key) =>{
//     if(trip.current){
//         key=trip.id
//         console.log(JSON.stringify(trip.background))
//         const test = JSON.stringify(trip.background)
//         return (
//         <>
//         <div className="card">
//             <img src={test} alt="Current Travels"/>
//         </div>
//         <div className="card-content">
//             <h1 className="title">{trip.country}</h1>
//             <h3 className="subtitle">{trip.city}</h3>
//             <p>{trip.startD} - {trip.endD} 2021</p>
//         </div>
//         </>
//         )
//     }})}</Link>

