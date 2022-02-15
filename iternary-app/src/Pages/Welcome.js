import React from "react";
import { Link } from "react-router-dom";
import WelcomeBar from "../Components/WelcomeBar";
import Footer from "../Components/Footer";
import AboutPic from "../Images/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg"

export function Welcome(){
    return (
        <div id="welcome">
            <header>
                <WelcomeBar />
            </header>

            <main>
                <section className="top-content text-center">
                    <h1 className="title">Vacay</h1>
                    <p>Let Us Travel The World!</p>
                </section>

                    <section className="about py-5" id="about">
                        <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={AboutPic} alt="About"/>
                            </div>
                            <div className="col-6">
                                <h1 className="title text-center py-3">About</h1>
                                <p>lorem nvjfv vfnvfv fjvnf vnv fv vnfvjn vvn fvnv fvnf v jfvn vjnv fvnv jvn fvjnfv  v vv fjvfvn </p>
                            </div>
                        </div>
                        <div className="button text-center">
                            <Link to="/register"><button className="btn mt-5 px-4">Get Started</button></Link>
                        </div>
                    </div>
                    </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Welcome;