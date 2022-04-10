import React from "react"
import { Link } from "react-router-dom";
import session from "../service/session";
import Footer from "../Components/Footer";
import Introduction from "../Components/Introduction";
import Navbar from "../Components/Navbar";

export function Home(){

    return (
        <div id="home">
            <header>
                <Navbar />
            </header>
            <main>
                <section className="hero">
                    <img src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Hero"/>
                    <Introduction email={session.user.email}/>
                </section>
                <div className="container">
                    <section className="sections">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <i class="fa-solid fa-plane-up pb-4"></i>
                                    <h1>Begin Your Travels</h1>
                                    <Link to="/add-adventure"><button className="btn">Start</button></Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <i class="fa-solid fa-map-location-dot py-4"></i>
                                    <h1>Current, Past or Upcoming Travels</h1>
                                    <Link to={`/history/${session.user.email}`}><button className="btn">View</button></Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <i class="fa-solid fa-people-group pb-4"></i>
                                    <h1>Share with your Friends</h1>
                                    <Link to="/friends"><button className="btn px-4">Your Friends</button></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;