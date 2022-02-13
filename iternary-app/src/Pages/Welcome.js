import React from "react";
import WelcomeBar from "../Components/WelcomeBar";
import Footer from "../Components/Footer";
import AboutPic from "../Images/juliana-kozoski-IoQioGLrz3Y-unsplash.jpg";

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

                <section className="about">
                    <div className="row">
                        <div className="col-6">
                            <img src={AboutPic} alt="About" width={100}/>
                        </div>
                        <div className="col-6">
                            <p>lorem nvjfv vfnvfv fjvnf vnv fv vnfvjn vvn fvnv fvnf v jfvn vjnv fvnv jvn fvjnfv  v vv fjvfvn </p>
                        </div>
                    </div>
                    <button className="btn btn-primary">Get Started</button>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Welcome;