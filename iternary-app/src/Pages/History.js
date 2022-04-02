import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Introduction from "../Components/Introduction";
import Navbar from "../Components/Navbar";
import session from "../service/session";

export function History(){

    const {email} = useParams();

    return (
        <div id="history">
            <header>
                <Navbar />
            </header>
            <section className="hero">
                    <img src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Hero"/>
                    <Introduction email={email}/>
            </section>

            <div className="container">
                <main>
                    <div className="row mt-5 sections">
                        <div className="col-lg-4">
                            <Link to={`/history/upcoming/${email}`}><div className="card">
                                <img src="https://images.unsplash.com/photo-1541807360746-039080941306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
                                <div className="layer">
                                    <h3>Upcoming Travels</h3>
                                </div>
                            </div></Link>
                        </div>
                        <div className="col-lg-4">
                            <Link to={`/history/current/${email}`}><div className="card">
                                <img src="https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" alt=""/>
                                <div className="layer">
                                    <h3>Current Travels</h3>
                                </div>
                            </div></Link>
                        </div>
                        <div className="col-lg-4">
                            <Link to={`/history/past/${email}`}><div className="card">
                                <img src="https://images.unsplash.com/photo-1632679760635-55966a6e3d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
                                <div className="layer">
                                    <h3>Past Travels</h3>
                                </div>
                            </div></Link>
                        </div>
                    </div>

                    {email === session.user.email ? (
                        <section className="add-new text-center pt-5 px-4">
                        <Link to="/add-adventure"><button className="btn">Start a New Adventure</button></Link>
                        </section> ) : (
                            <></>
                        )
                    }
                </main>
            
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default History;