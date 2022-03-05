import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import { useNavigate } from "react-router-dom";
import session from "../session";

export function AddAdventure({adventures, setAdventures}){

    const [newAdventure, setNewAdventure] = useState(
        {
            country: "",
            city: "",
            startD: "",
            endD: "",
            description: "",
            background: "",
            link: ""
        }
    )

    function handleChange(event){
        setNewAdventure(prevState =>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    let navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        setAdventures(
            adventures.push(
                {
                    id: adventures.length + 1,
                    country: newAdventure.country,
                    city: newAdventure.city,
                    startD: newAdventure.startD,
                    endD: newAdventure.endD,
                    background: newAdventure.background,
                    description: newAdventure.description,
                    link: newAdventure.link,
                    userID: session.userID
                }
            )
        )

        setNewAdventure({
            country: "",
            city: "",
            startD: "",
            endD: "",
            description: "",
            background: "",
            link: ""
        })

        navigate(`/history`)
    }

    return (
        <div id="add-adventure">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main>
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">Where Are You Heading?</h1>
                    </div>
                    <form className="row g-3 my-1" onSubmit={handleSubmit}>
                        <h1 className="heading">Location</h1>
                        <div class="col-md-6">
                            <label htmlFor="country" className="form-label">Country/State</label>
                            <input type="text" className="form-control" id="country" name="country" value={newAdventure.country} onChange={handleChange} required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" name="city" value={newAdventure.city} onChange={handleChange} required/>
                        </div>
                        
                        <div className="date">
                            <h1 className="heading">Date</h1>
                            <div className="col-md-6">
                                <label htmlFor="start" className="form-label">Start Date</label>
                                <input type="date" className="form-control" id="start" name="startD" value={newAdventure.startD} onChange={handleChange} required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="end" className="form-label">End Date</label>
                                <input type="date" className="form-control" id="end" name="endD" value={newAdventure.endD} onChange={handleChange} required/>
                            </div>
                        </div>

                        <h1 className="heading">Tell us about the location</h1>
                        <div className="col-12">
                            <textarea id="description" rows={5} cols={100} name="description" value={newAdventure.description} onChange={handleChange} required/>
                        </div>

                        <h1 className="heading">Background Image</h1>
                        <div className="col-6">
                            <label htmlFor="inputState" className="form-label">Enter the URL of image</label>
                            <input type="url" class="form-control" id="inputGroupFile02" name="background" value={newAdventure.background} onChange={handleChange} required/>
                        </div>

                        <h1 className="heading">Google Link of Location</h1>
                        <div className="col-6">
                            <input type="url" className="form-control" name="link" value={newAdventure.link} onChange={handleChange} required/>
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

export default AddAdventure;