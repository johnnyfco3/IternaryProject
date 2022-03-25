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
import AddComment from "../Components/AddComment";

export function Overview(){

    const {adventureID, id} = useParams()

    const [location, setLocation] = useState({})
    const [postsList, setPostList] = useState([])
    const [stopsList, setStopsList] = useState([])
    const [commentsList, setCommentsList] = useState([])
    const [addComment, setAddComment] = useState(false)
    const [allActive, setAllActive] = useState(false)

    let navigate = useNavigate()

    useEffect(() => {
        const trip = adventures.find(trip => trip.id === parseInt(adventureID))
        setLocation(trip)
        setPostList(posts)
        setStopsList(stops)
        setCommentsList(comments)
    }, [adventureID])

    const settings = {
        className: "slider",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true
    }

    const postComp = postsList.map((post, i) => {
        if(post.adventureID === parseInt(adventureID)){
            return <Posts post={post} key={i} index={i} id={id} removePost={removePost}/>
        }
    })

    const stopComp =
            <Slider {...settings} className="pt-3">
                {stopsList.map((stop, i) => {
                    if(stop.adventureID === parseInt(adventureID)){
                        return <Locations stop={stop} id={id} key={i} index={i} removeStop={removeStop} allActive={allActive} setAllActive={setAllActive}/>
                    }
                })}
            </Slider>

    const commentSection = commentsList.map((comment, i) => {
        if(comment.adventureID === parseInt(adventureID)){
            return (
                <div className="comments">
                    <Comments comment={comment} id={id} index={i} removeComment={removeComment}/>
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
        setStopsList(prevState => prevState.filter(stop => stop.id !== id))
    }

    function removeComment(e, i, id){
        e.stopPropagation();
        comments.splice(i,1)
        setCommentsList(prevState => prevState.filter(comment => comment.id !== id))
    }

    function toggleAdd(){
        setAddComment(prevState => !prevState)
    }

    function toggleAllActive(){
        setAllActive(prevState => !prevState)
    }

    return (
        <div id="overview" style={styles}>
            <header>
                <Navbar />
            </header>

            <div className="container pt-4">
                <main>
                    <section className="main-content">
                    <button className="btn pb-4 back" onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left"></i> Go Back</button>
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

                    <FlightInfo adventureID={adventureID}/>
                    
                    {parseInt(id) === session.userID ? (
                        <>
                        <section className="stops reveal">
                            <div className="d-flex justify-content-between">
                                <h1>Planning To Visit</h1>
                                <h4 className="mt-4" onClick={toggleAllActive}>Flip cards to see Itinerary</h4>
                            </div>
                            {stopComp}
                            <div className="button text-center">
                                <Link to={`/add-stop/${adventureID}`}><button className="btn btn-success px-4">Add A Stop</button></Link>
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
                                {addComment ? ( 
                                    <div className="add-comment">
                                        <AddComment adventureID={adventureID} id={id} setAddComment={setAddComment}/>
                                        <div className="text-center">
                                            <button className="btn btn-light px-4 mt-3" onClick={toggleAdd}>Cancel</button>
                                        </div>
                                    </div>
                                    ) : (
                                    <div className="button text-center pb-5">
                                        <button className="btn btn-success px-4" onClick={toggleAdd}>Add a Comment</button>
                                    </div>
                                    )
                                }
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
                                {addComment ? ( 
                                    <div className="add-comment">
                                        <AddComment adventureID={adventureID} id={id} setAddComment={setAddComment}/>
                                        <div className="text-center">
                                            <button className="btn btn-light px-4 mt-3" onClick={toggleAdd}>Cancel</button>
                                        </div>
                                    </div>
                                    ) : (
                                    <div className="button text-center pb-5">
                                        <button className="btn btn-success px-4" onClick={toggleAdd}>Leave a Comment</button>
                                    </div>
                                    )
                                }
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