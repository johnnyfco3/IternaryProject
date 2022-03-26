import React from "react";
import { Link } from "react-router-dom";
import AboutPic from "../Images/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg"

export function About(){
    return (
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
    )
}

export default About;