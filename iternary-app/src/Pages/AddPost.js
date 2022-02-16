import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

export function AddPost(){
    return (
        <div id="add-post">
            <Navbar />

            <div className="container">
                <div className="top-content mt-4 text-center">
                    <h1 className="title">Let's Add a New Post</h1>
                </div>
                <main>
                    <form class="row g-3 my-5">
                        <h1 className="heading">Location</h1>
                        <div class="col-md-6">
                            <input type="text" className="form-control" id="location" />
                        </div>
                    
                        <h1 className="heading mt-4">Upload Post</h1>
                        <div class="col-6">
                            <label for="inputState" class="form-label">Select an image</label>
                            <input type="file" class="form-control" id="inputGroupFile02" />
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