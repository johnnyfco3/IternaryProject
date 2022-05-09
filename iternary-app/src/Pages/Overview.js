import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import session from "../service/session";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Posts from "../Components/Posts";
import FlightInfo from "../Components/FlightInfo";
import Comments from "../Components/Comments";
import Locations from "../Components/Locations";
import AddComment from "../Components/AddComment";
import AdventureIntro from "../Components/AdventureIntro";
import { getById } from "../service/adventures";
import { getPosts, removePost } from "../service/posts";
import { getComments, removeComment } from "../service/comments";
import { getStops, removeStop } from "../service/stops";

export function Overview(){

    const {adventureID, email} = useParams()

    const [location, setLocation] = useState({})
    const [postsList, setPostList] = useState([])
    const [stopsList, setStopsList] = useState([])
    const [commentsList, setCommentsList] = useState([])
    const [addComment, setAddComment] = useState(false)
    const [allActive, setAllActive] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const adventure = await getById(parseInt(adventureID))
            setLocation(adventure.data)
            const posts = await getPosts()
            setPostList(posts.data)
            const stops = await getStops()
            setStopsList(stops.data)
            const comments = await getComments()
            setCommentsList(comments.data)
        }
        fetchData()
    }, [adventureID])

    const settings = {
        className: "slider",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    const postComp = postsList.map((post, i) => {
        if(post.adventureID === parseInt(adventureID)){
            return <Posts post={post} key={i} email={email} removePost={removePosts}/>
        }
    })

    const stopComp =
        <Slider {...settings} className="slider pt-3">
            {stopsList.map((stop, i) => {
                if(stop.adventureID === parseInt(adventureID)){
                    return <Locations stop={stop} email={email} key={i} removeStop={removeStops} allActive={allActive} setAllActive={setAllActive}/>
                }
            })}
        </Slider>

    const commentSection = commentsList.map((comment, i) => {
        if(comment.adventureID === parseInt(adventureID)){
            return (
                <div className="comments">
                    <Comments comment={comment} email={email} removeComment={removeComments} key={i} />
                </div>
            )
        }
      })

    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${location.backgroundImg})`,
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

    async function removePosts(e, id){
        e.stopPropagation();
        try{
            const res = await removePost(id)
            setPostList(postsList.filter((post) => post.postID !== id))
        }
        catch(err){
            console.log(err)
        }
    }

    async function removeStops(e, id){
        e.stopPropagation();
        try{
            await removeStop(id)
            setStopsList(stopsList.filter((stop) => stop.stopID !== id))
        }
        catch(err){
            console.log(err)
        }
    }

    async function removeComments(e, id){
        e.stopPropagation();
        try {
            console.log(id)
            await removeComment(id)
            setCommentsList(commentsList.filter((comment) => comment.commentID !== id))
        } catch (error) {
            console.log(error)
        }
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
                        <AdventureIntro location={location}/>
                    </section>

                    <FlightInfo adventureID={adventureID} email={email}/>
                    
                    {email === session.user.email ? (
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
                                <Link to={`/add-post/${adventureID}`}><button className="btn btn-success px-4">New Post</button></Link>
                            </div>
                            <div className="comment reveal">
                                <h3 className="title text-center pt-5">Comments</h3>
                                {commentSection}
                                {addComment ? ( 
                                    <div className="add-comment">
                                        <AddComment adventureID={adventureID} setAddComment={setAddComment} setCommentsList={setCommentsList}/>
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
                            <div className="d-flex justify-content-between">
                                <h1>Planning To Visit</h1>
                                <h4 className="mt-4" onClick={toggleAllActive}>Flip cards to see Itinerary</h4>
                            </div>
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
                                        <AddComment adventureID={adventureID} setAddComment={setAddComment} setCommentsList={setCommentsList}/>
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