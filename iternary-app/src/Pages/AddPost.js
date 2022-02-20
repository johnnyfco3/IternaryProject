import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

export function AddPost(){

    const {id} = useParams()

    const [posts, setPosts] = useState([
        { name: "World Trade Center", img: "https://images.unsplash.com/photo-1582436416930-f533b50a7cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80", adventureID: 1 },
        { name: "Little Island", img: "https://images.unsplash.com/photo-1622491088758-364f7e4908fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", adventureID: 1 },
        { name: "The Vessel", img: "https://images.unsplash.com/photo-1559613527-817fdce54129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", adventureID: 1 },
        { name: "Time Square", img: "https://images.unsplash.com/photo-1595901688281-9cef114adb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", adventureID: 1 },
        { name: "Central Park", img: "https://images.unsplash.com/photo-1558385953-d50e6afd94c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", adventureID: 1 }
    ])

    const [newPost, setNewPost] = useState(
        {
            location: "",
            post: ""
        }
    )

    function handleChange(event){
        setNewPost(prevState =>({
            ...prevState,
            [event.target.name]: event.target.value

        }))
    }

    let navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        setPosts(
            posts.push(
                {
                    name: newPost.location,
                    img: newPost.post,
                    adventureID: id
                }
            )
        )

        setNewPost(
            {
                location: "",
                post: ""
            }
        )
        navigate(`/overview/${id}`)
    }

    return (
        <div id="add-post">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main>
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">Let's Add a New Post</h1>
                    </div>
                    
                    <form className="row g-3 my-5" onSubmit={handleSubmit}>
                        <h1 className="heading">Location</h1>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="location" name="location" value={newPost.location} onChange={handleChange} required/>
                        </div>
                    
                        <h1 className="heading mt-4">Upload Post</h1>
                        <div className="col-6">
                            <label htmlFor="inputState" className="form-label">Enter image URL</label>
                            <input type="url" className="form-control" id="inputGroupFile02" name="post" value={newPost.post} onChange={handleChange} required/>
                        </div>

                        <div className="col-12 text-center button">
                            <button type="submit" className="btn px-4">Submit</button>
                        </div>
                    </form>
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default AddPost;