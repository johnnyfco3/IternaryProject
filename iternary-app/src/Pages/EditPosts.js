import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { getById } from "../service/posts";

export function EditPosts(){

    const {postID} = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        getById(parseInt(postID)).then(data => {
            setPost(data)
        })
    }, [postID])

    return (
        <div id="edit-post">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main className="card p-4 mt-3">
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">Edit Post</h1>
                    </div>
                    
                    <form className="row g-3 my-1">
                        <h1 className="heading mt-4">Upload Post</h1>
                        <div className="col-6">
                            <label htmlFor="img" className="form-label">Enter image URL</label>
                            <input type="url" className="form-control" id="img" name="post" placeholder={post.img}/>
                        </div>

                        <h1 className="heading">Caption</h1>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="caption" name="caption" placeholder={post.caption}/>
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

export default EditPosts;