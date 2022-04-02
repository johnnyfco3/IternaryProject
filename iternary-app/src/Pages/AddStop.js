import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import stops from "../models/stops";

export function AddStop(){

    const {adventureID} = useParams();

    const [newStop, setNewStop] = useState({
        location: "",
        img: "",
    })

    let navigate = useNavigate();

    function handleChange(event){
        setNewStop(prevState =>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        stops.push({
            id: stops.length + 1,
            location: newStop.location,
            img: newStop.img,
            adventureID: parseInt(adventureID)
        })

        setNewStop({
            location: "",
            img: "",
        })

        navigate(-1)
    }


    return (
        <div id="add-stop">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main className="card p-4 mt-3">
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">Where Are You Planning to Visit?</h1>
                    </div>
                    
                    <form className="my-1" onSubmit={handleSubmit}>
                        <h1 className="heading">Location</h1>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="location" name="location" value={newStop.location} onChange={handleChange} required/>
                        </div>
                    
                        <h1 className="heading mt-4">Image of Location</h1>
                        <div className="col-6">
                            <label htmlFor="image" className="form-label">Enter image URL</label>
                            <input type="url" className="form-control" id="image" name="img" value={newStop.img} onChange={handleChange} required/>
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

export default AddStop;