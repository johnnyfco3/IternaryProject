import React from "react";
import LittleIsland from "../Images/heber-galindo-W8OJQ3tFNh0-unsplash.jpg";
import WTC from "../Images/ravi-patel-g_d0ZRtqGpY-unsplash.jpg";
import Vessel from "../Images/fourfour-86eRHRwWWro-unsplash.jpg";
import TimesS from "../Images/photo-1595901688281-9cef114adb0b.jpeg";
import Central from "../Images/photo-1558385953-d50e6afd94c2.jpeg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export function Overview(){
    return (
        <div id="overview">
            <Navbar />
            <div className="container pt-4">
                <div className="main-content">
                    <h1>New York</h1>
                    <div className="row top">
                        <div className="col-1 me-4 mb-5">
                            <div class="circle rounded-circle">
                                <p>Jun</p>
                                <p>2021</p>
                            </div>
                        </div>
                        <div className="col-10 info">
                            <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. 
                                At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, 
                                financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building 
                                and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.</p>
                        </div>
                    </div>
                    <div className="discover me-5">
                        <a href="https://goo.gl/maps/Dsd9XgPXUDoFBR9F8" target="_blank"><button className="btn px-4 mt-3">Discover</button></a>
                    </div>
                </div>

                <div className="bottom-content">
                    <div className="row bottom">
                        <div className="col-4">
                            <h3>World Trade Center</h3>
                            <div className="card mt-3">
                                <img src={WTC} alt="World Trade Center" />
                            </div>
                        </div>
                        <div className="col-4">
                            <h3>Little Island</h3>
                            <div className="card mt-3">
                                <img src={LittleIsland} alt="Little Island" />
                            </div>
                        </div>
                        <div className="col-4">
                            <h3>The Vessel</h3>
                            <div className="card mt-3">
                                <img src={Vessel} alt="The Vessel" />
                            </div>
                        </div>
                        <div className="col-4">
                            <h3>Time Square</h3>
                            <div className="card mt-3">
                                <img src={TimesS} alt="Time Square" />
                            </div>
                        </div>
                        <div className="col-4">
                            <h3>Central Park</h3>
                            <div className="card mt-3">
                                <img src={Central} alt="Central Park" />
                            </div>
                        </div>
                    </div>
                    <div className="button text-center">
                        <Link to="/add-post"><button className="btn btn-success px-4">Add Post</button></Link>
                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Overview;