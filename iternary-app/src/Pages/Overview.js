import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useParams } from "react-router-dom";
import Posts from "../Components/Posts";
import FlightInfo from "../Components/FlightInfo";

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

                    <FlightInfo />

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