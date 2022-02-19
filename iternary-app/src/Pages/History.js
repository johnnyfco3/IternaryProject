import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export function History(){

    const [adventures, setAdventures] = useState([
        { 
            id: 1, 
            country: "New York", 
            city: "New York City", 
            startD: "11 Jun", 
            endD: "3 Jul", 
            background: "https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
            description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.",
            link: "https://goo.gl/maps/Dsd9XgPXUDoFBR9F8", 
            current: true 
        },
        { 
            id: 2, 
            country: "Australia", 
            city: "Sydney", 
            startD: "20 Feb", 
            endD: "3 March", 
            background: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", 
            description: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbour front Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.",
            link: "https://goo.gl/maps/qc9N74ZiEbnoL8mVA",
            current: false 
        },
        { 
            id: 3, 
            country: "Italy", 
            city: "Venice", 
            startD: "25 Dec", 
            endD: "31 Jan", 
            background: "https://images.unsplash.com/photo-1480548004877-593316be2bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
            description: "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.",
            link: "https://goo.gl/maps/jdAxNDCYgBXoLdY69",
            current: false 
        }
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
                        <div className="row">
                                {adventures.map(trip => {
                                if(trip.current){
                                    return (
                                        <div className="position col-6">
                                        <Link to={`/overview/${trip.id}`}><div className="card">
                                            <img src={trip.background} alt="Current Travels"/>
                                        </div>
                                        <div className="card-content">
                                            <h1 className="title">{trip.country}</h1>
                                            <h3 className="subtitle">{trip.city}</h3>
                                            <p>{trip.startD} - {trip.endD} 2021</p>
                                        </div></Link>
                                        </div>
                                    )
                                }
                            })}
                            </div>
                    </section>

                    <section className="past pt-5">
                        <h1 className="heading pb-4">Past Adventures</h1>
                            <div className="row">
                                {adventures.map(trip => {
                                if(!trip.current){
                                    return (
                                        <div className="position col-6">
                                        <Link to={`/overview/${trip.id}`}><div className="card">
                                            <img src={trip.background} alt="Current Travels"/>
                                        </div>
                                        <div className="card-content">
                                            <h1 className="title">{trip.country}</h1>
                                            <h3 className="subtitle">{trip.city}</h3>
                                            <p>{trip.startD} - {trip.endD} 2021</p>
                                        </div></Link>
                                        </div>
                                    )
                                }
                            })}
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