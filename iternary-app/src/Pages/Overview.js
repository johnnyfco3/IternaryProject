import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useParams } from "react-router-dom";

export function Overview(){

    const {id} = useParams()

    const [adventures, setAdventures] = useState([
        { 
            id: 1, 
            country: "New York", 
            city: "New York City", 
            startD: "2022-06-11", 
            endD: "2022-07-03", 
            background: "https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
            description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.",
            link: "https://goo.gl/maps/Dsd9XgPXUDoFBR9F8", 
            current: true 
        },
        { 
            id: 2, 
            country: "Australia", 
            city: "Sydney", 
            startD: "2021-02-20", 
            endD: "2021-03-03", 
            background: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", 
            description: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbour front Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.",
            link: "https://goo.gl/maps/qc9N74ZiEbnoL8mVA",
            current: false 
        },
        { 
            id: 3, 
            country: "Italy", 
            city: "Venice", 
            startD: "2021-12-25", 
            endD: "2021-12-31", 
            background: "https://images.unsplash.com/photo-1480548004877-593316be2bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
            description: "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.",
            link: "https://goo.gl/maps/jdAxNDCYgBXoLdY69",
            current: false 
        },
        { 
            id: 4, 
            country: "Europe", 
            city: "France", 
            startD: "2022-02-26", 
            endD: "2022-02-26", 
            background: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
            description: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.",
            link: "https://goo.gl/maps/Y6z271kWarFVRdG17",
            current: true 
        }
    ])

    const [location, setLocation] = useState({})

    useEffect(() => {
        adventures.map(trip => {
        if(trip.id == id){
            setLocation(trip)
        }
    })}, [])

    const [posts, setPosts] = useState([
        { name: "World Trade Center", img: "https://images.unsplash.com/photo-1582436416930-f533b50a7cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"},
        { name: "Little Island", img: "https://images.unsplash.com/photo-1622491088758-364f7e4908fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" },
        { name: "The Vessel", img: "https://images.unsplash.com/photo-1559613527-817fdce54129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" },
        { name: "Time Square", img: "https://images.unsplash.com/photo-1595901688281-9cef114adb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
        { name: "Central Park", img: "https://images.unsplash.com/photo-1558385953-d50e6afd94c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
    ])

    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${location.background})`,
        backgroundSize: "cover"
    }

    return (
        <div id="overview" style={styles}>
            <header>
                <Navbar />
            </header>


            <div className="container pt-4">
                <main>
                    <section className="main-content">
                        <h1>{location.city}</h1>
                        <div className="row top">
                            <div className="col-1 me-4 mb-5">
                                <div className="circle rounded-circle text-center">
                                    <p>{location.startD}</p>
                                </div>
                            </div>
                            <div className="col-10 info">
                                <p>{location.description}</p>
                            </div>
                        </div>
                        <div className="discover me-5">
                            <a href={location.link} target="_blank"><button className="btn px-4 mt-3">Discover</button></a>
                        </div>
                    </section>

                    <section className="bottom-content">
                        <div className="row bottom">
                            {posts.map(post => {
                                return (
                                <div className="col-4">
                                    <h3>{post.name}</h3>
                                    <div className="card mt-3">
                                        <img src={post.img} alt="Location" />
                                    </div>
                                </div>
                                )
                            })
                        }
                        </div>
                        <div className="button text-center">
                            <Link to={`/add-post/${id}`}><button className="btn btn-success px-4">Add Post</button></Link>
                        </div>
                    </section>
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Overview;