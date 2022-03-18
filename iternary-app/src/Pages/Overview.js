import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import adventures from '../models/adventures';
import posts from '../models/posts';
import comments from '../models/comments';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Posts from "../Components/Posts";
import FlightInfo from "../Components/FlightInfo";
import session from "../session";
import Comments from "../Components/Comments";

export function Overview(){

    const {adventureID, id} = useParams()

    const [location, setLocation] = useState({})
    const [postsList, setPostList] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        adventures.map(trip => {
        if(trip.id == adventureID){
            setLocation(trip)
        }
        setPostList(posts)
    })}, [adventureID])

    function remove(e, i, id){
        e.stopPropagation();
        posts.splice(i,1)
        setPostList(prevState => prevState.filter(post => post.id !== id))
    }

    const postComp = posts.map((post, i) => {
        if(post.adventureID == adventureID){
            return <Posts post={post} id={id} key={i} index={i} remove={remove}/>
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

      const commentSection = comments.map(comment => {
        if(comment.adventureID == adventureID){
            return (
                <div className="comments reveal">
                    <Comments comment={comment}/>
                </div>
            )
        }
      })

    const settings = {
        className: "slider",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true
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
                    
                    <div className="py-5">
                    <Slider {...settings}>
                        {[1,2,3,4,5,6,7].map((item,index) => {
                            return <div key={index}>{item}</div>
                        })}
                    </Slider>
                    </div>
                    
                    {id == session.userID ? (
                        <section className="bottom-content reveal">
                            <div className="row bottom">
                                {postComp}
                            </div>
                            <div className="button text-center pb-5">
                                <Link to={`/add-post/${adventureID}/${id}`}><button className="btn btn-success px-4">Add Post</button></Link>
                            </div>
                            <h3 className="title text-center pt-5">Comments</h3>
                            {commentSection}
                        </section>
                    ) : (
                        <section className="bottom-content reveal">
                            <div className="row bottom">
                                {postComp}
                            </div>
                            <h3 className="title text-center pt-5">Comments</h3>
                            {commentSection}
                        </section>
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