import React from "react";
import { Link } from "react-router-dom";
import WelcomeBar from "../Components/WelcomeBar";
import Footer from "../Components/Footer";
import AboutPic from "../Images/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg"
import MainPage from "../Images/MainPage.png"
import Adventures from "../Images/Adventures.png"
import Friends from "../Images/Friends.png"

export function Welcome(){

    function reveal() {
        let reveals = document.querySelectorAll(".reveal");
      
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);

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
                    <div className="container reveal">
                        <div className="row">
                            <div className="col-6">
                                <img src={AboutPic} alt="About"/>
                            </div>
                            <div className="col-6">
                                <h1 className="title text-center py-3">About</h1>
                                <p>Welcome to a community that loves to travel, trying new things and sharing their wonderful 
                                    experiences with others. If you are interested in organizing all your travel memories
                                    online for friends and family to see, Vacay is the application for you. So what are you
                                    waiting for? Hit that "Get Started" button and start sharing with us the world you choose 
                                    to explore!</p>
                            </div>
                        </div>
                        <div className="button text-center">
                            <Link to="/register"><button className="btn px-4">Get Started</button></Link>
                        </div>
                    </div>
                </section>

                <section className="preview py-5" id="design">
                    <div className="container reveal">
                        <h1 className="title text-center pb-5 pt-2">Design Your Page To Your <br /> Preference</h1>
                        <div className="row pt-5">
                            <div className="col-4 pb-4">
                                <img src={MainPage} alt="Main Page"/>
                            </div>
                            <div className="col-4 pb-4">
                                <img src={Adventures} alt="Adventures"/>
                            </div>
                            <div className="col-4 pb-4">
                                <img src={Friends} alt="Friends"/>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-4">
                                <h3 className="text-center">Main Page</h3>
                            </div>
                            <div className="col-4">
                                <h3 className="text-center">Adventures</h3>
                            </div>
                            <div className="col-4">
                                <h3 className="text-center">Friends</h3>
                            </div>
                        </div>
                    </div>    
                </section>
            </main>

            <footer>
                <div className="reveal">
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default Welcome;