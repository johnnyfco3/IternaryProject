import React from "react";
import LittleIsland from "../Images/heber-galindo-W8OJQ3tFNh0-unsplash.jpg";
import WTC from "../Images/ravi-patel-g_d0ZRtqGpY-unsplash.jpg";
import Vessel from "../Images/fourfour-86eRHRwWWro-unsplash.jpg";
import TimesS from "../Images/photo-1595901688281-9cef114adb0b.jpeg";
import Central from "../Images/photo-1558385953-d50e6afd94c2.jpeg";
import Navbar from "../Components/Navbar";

export function Overview(){
    return (
        <div id="overview">
            <Navbar />
            <div className="container pt-4">
                <div className="top-content text-center pt-2">
                    <h2>Good Morning Johnny</h2>
                    <blockquote>Let's make today a memorable one!
                        <cite> - Johnny T</cite>
                    </blockquote>
                </div>

                <div className="main-content">
                    <h1>New York</h1>
                    <div className="row">
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
                        <button className="btn px-4 mt-3">Discover</button>
                    </div>
                </div>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h3>World Trade Center</h3>
                            <div className="icons">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <img src={WTC} className="d-block" alt="World Trade Center" />
                        </div>
                        <div className="carousel-item">
                            <h3>Little Island</h3>
                            <div className="icons">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <img src={LittleIsland} className="d-block" alt="Little Island" />
                        </div>
                        <div className="carousel-item">
                            <h3>The Vessel</h3>
                            <div class="icons">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <img src={Vessel} className="d-block" alt="The Vessel" />
                        </div>
                        <div className="carousel-item">
                            <h3>Time Square</h3>
                            <div className="icons">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <img src={TimesS} className="d-block" alt="Time Square" />
                        </div>
                        <div className="carousel-item">
                            <h3>Central Park</h3>
                            <div className="icons">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <img src={Central} className="d-block" alt="Central Park" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <footer></footer>
            </div>
        </div>
    )
}

export default Overview;