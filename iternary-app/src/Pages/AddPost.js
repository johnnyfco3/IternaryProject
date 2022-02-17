import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

export function AddPost(){

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

    function handleSubmit(e){
        e.preventDefault();
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
                            <label htmlFor="inputState" className="form-label">Select an image</label>
                            <input type="file" className="form-control" id="inputGroupFile02" name="post" value={newPost.post} onChange={handleChange} required/>
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