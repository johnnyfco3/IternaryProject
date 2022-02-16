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
                    
                    <form class="row g-3 my-5" onSubmit={handleSubmit}>
                        <h1 className="heading">Location</h1>
                        <div class="col-md-6">
                            <input type="text" className="form-control" id="location" value={newPost.location} onChange={(event)=> setNewPost(event.target.value)} required/>
                        </div>
                    
                        <h1 className="heading mt-4">Upload Post</h1>
                        <div class="col-6">
                            <label for="inputState" class="form-label">Select an image</label>
                            <input type="file" class="form-control" id="inputGroupFile02" value={newPost.post} onChange={(event)=> setNewPost(event.target.value)} required/>
                        </div>

                        <div class="col-12 text-center button">
                            <button type="submit" class="btn px-4">Submit</button>
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