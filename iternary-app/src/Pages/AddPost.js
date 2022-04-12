import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import { createPost } from "../service/posts";

export function AddPost(){

    const {adventureID} = useParams();

    const [newPost, setNewPost] = useState(
        {
            img: "",
            caption: "",
            adventureID: parseInt(adventureID),
        }
    )

    function handleChange(event){
        setNewPost(prevState =>({
            ...prevState,
            [event.target.name]: event.target.value

        }))
    }

    let navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await createPost(newPost)
            setNewPost({
                img: "",
                caption: "",
                adventureID: parseInt(adventureID),
            })
            navigate(-1)
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div id="add-post">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main className="card p-4 mt-3">
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">Let's Add a New Post</h1>
                    </div>
                    
                    <form className="row g-3 my-1" onSubmit={handleSubmit}>
                        <h1 className="heading mt-4">Upload Post</h1>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">Enter image URL</label>
                            <input type="text" className="form-control" name="img" value={newPost.img} onChange={handleChange} required/>
                        </div>

                        <h1 className="heading">Caption</h1>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="caption" name="caption" value={newPost.caption} onChange={handleChange} required/>
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