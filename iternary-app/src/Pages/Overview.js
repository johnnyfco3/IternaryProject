import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import adventures from '../models/adventures';
import posts from '../models/posts';
import comments from '../models/comments';
import stops from "../models/stops";
import session from "../session";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Posts from "../Components/Posts";
import FlightInfo from "../Components/FlightInfo";
import Comments from "../Components/Comments";
import Locations from "../Components/Locations";

export function Overview(){

    const {adventureID, id} = useParams()

    const [location, setLocation] = useState({})
    const [postsList, setPostList] = useState([])
    const [stopsList, setStopsList] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        adventures.map(trip => {
        if(trip.id == adventureID){
            setLocation(trip)
        }
        setPostList(posts)
    })}, [adventureID])

    const settings = {
        className: "slider",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true
    }

    const postComp = posts.map((post, i) => {
        if(post.adventureID == adventureID){
            return <Posts post={post} id={id} key={i} index={i} removePost={removePost}/>
        }
    })

    const stopComp =
            <Slider {...settings} className="pt-3">
                {stops.map((stop, i) => {
                    if(stop.adventureID == adventureID){
                        return <Locations stop={stop} id={id} key={i} index={i} removeStop={removeStop}/>
                    }
                })}
            </Slider>

    const commentSection = comments.map(comment => {
        if(comment.adventureID == adventureID){
            return (
                <div className="comments">
                    <Comments comment={comment}/>
                </div>
            )
        }
      })

    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${location.background})`,
        backgroundSize: "cover"
    }

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

    function removePost(e, i, id){
        e.stopPropagation();
        posts.splice(i,1)
        setPostList(prevState => prevState.filter(post => post.id !== id))
    }

    function removeStop(e, i, id){
        e.stopPropagation();
        stops.splice(i,1)
        setStopsList(prevState => prevState.filter(post => post.id !== id))
    }

    return (
        <div id="overview" style={styles}>
            <header>
                <Navbar />
            </header>

            <div className="container pt-4">
                <main>
                    <section className="main-content">
                    <button className="btn pb-4 back" onClick={() => navigate(-1)}><i class="fa-solid fa-arrow-left"></i> Go Back</button>
                        <h1>{location.location}</h1>
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
                    
                    {id == session.userID ? (
                        <>
                        <section className="stops reveal">
                            <h1>Planning To Visit</h1>
                            {stopComp}
                            <div className="button text-center">
                                <Link to={`/add-stop/${adventureID}/${id}`}><button className="btn btn-success px-4">Add A Stop</button></Link>
                            </div>
                        </section>

                        <section className="bottom-content reveal">
                            <h1>My Posts</h1>
                            <div className="row bottom">
                                {postComp}
                            </div>
                            <div className="button text-center pb-5">
                                <Link to={`/add-post/${adventureID}/${id}`}><button className="btn btn-success px-4">New Post</button></Link>
                            </div>
                            <div className="comment reveal">
                                <h3 className="title text-center pt-5">Comments</h3>
                                {commentSection}
                                <div className="button text-center pb-5">
                                    <button className="btn btn-success px-4">Add a Comment</button>
                                </div>
                            </div>
                        </section>
                        </>
                    ) : (
                        <>
                        <section className="stops reveal">
                            <h1>Planning To Visit</h1>
                            {stopComp}
                        </section>
                        <section className="bottom-content reveal">
                            <div className="row bottom">
                            <h1>Posts</h1>
                                {postComp}
                            </div>
                            <div className="comment reveal">
                                <h3 className="title text-center pt-5">Comments</h3>
                                {commentSection}
                                <div className="button text-center pb-5">
                                    <button className="btn btn-success px-4">Leave a Comment</button>
                                </div>
                            </div>
                        </section>
                        </>
                    )}
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Overview;