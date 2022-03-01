import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useParams } from "react-router-dom";
import Posts from "../Components/Posts";

export function Overview({adventures, posts}){

    const {adventureID} = useParams()

    const [location, setLocation] = useState({})

    useEffect(() => {
        adventures.map(trip => {
        if(trip.id == adventureID){
            setLocation(trip)
        }
    })}, [adventures, adventureID])

    const postComp = posts.map(post => {
        if(post.adventureID == adventureID){
            return <Posts post={post}/>
        }
    })

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
                            <a href={location.link} target="_blank" rel="noreferrer"><button className="btn px-4 mt-3">Discover</button></a>
                        </div>
                    </section>

                    <section className="flight-info d-flex justify-content-center pt-5">
                        <div className="col-10">
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1575116464504-9e7652fddcb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt=""/>
                                <h2 className="text-center">Flight Information</h2>
                                <div className="flight-content">
                                    <h3 className="text-center">BA2540</h3>
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <a href="">JFK</a>
                                            <p className="pt-1">07:00</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="bar">
                                                <div className="progressing"></div>
                                                <span className="circle-bar"></span>
                                            </div>
                                            <p className="pt-1">0 stops</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <a href="">LGA</a>
                                            <p className="pt-1">10:30</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn">View</button>
                            </div>
                        </div>
                    </section>

                    <section className="bottom-content">
                        <div className="row bottom">
                            {postComp}
                        </div>
                        <div className="button text-center">
                            <Link to={`/add-post/${adventureID}`}><button className="btn btn-success px-4">Add Post</button></Link>
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