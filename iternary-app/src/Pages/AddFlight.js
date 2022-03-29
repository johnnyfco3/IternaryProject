import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import flightInfo from "../models/flights";

export function AddFlight(){

    const {id} = useParams()

    const [flight, setFlight] = useState({
        number: "",
        from: "",
        to: "",
        depart: "",
        arrival: "",
    })

    function handleChange(event){
        setFlight(prevState =>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        if(flight){
            flightInfo.push({
                id: flightInfo.length + 1,
                number: flight.number,
                from: flight.from,
                to: flight.to,
                depart: flight.depart,
                arrival: flight.arrival,
                adventureID: parseInt(id)
            })
            setFlight({
                number: "",
                from: "",
                to: "",
                depart: "",
                arrival: "",
            })
        }
    }

    return(
        <div id="add-flight">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main>
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">Flight Information</h1>
                    </div>
                    
                    <form className="my-1" onSubmit={handleSubmit}>
                    <div class="row g-3">
                        <div className="col-md-6">
                            <h1 className="heading">Flight Number</h1>
                            <input type="text" className="form-control" id="number" name="number" value={flight.number} onChange={handleChange} required/>
                        </div>
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-4">
                            <h1 className="heading">From</h1>
                            <input type="text" className="form-control" id="from" name="from" placeholder='Input Airport Abbreviation' value={flight.from} onChange={handleChange}  required/>
                        </div>
                        <div className="col-md-4">
                            <h1 className="heading">To</h1>
                            <input type="text" className="form-control" id="to" name="to" placeholder='Input Airport Abbreviation' value={flight.to} onChange={handleChange} required/>
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-3">
                            <h1 className="heading">Depart Time</h1>
                            <input type="time" className="form-control" id="depart" name="depart" value={flight.depart} onChange={handleChange}  required/>
                        </div>
                        <div className="col-md-3">
                            <h1 className="heading">Arrival Time</h1>
                            <input type="time" className="form-control" id="arrival" name="arrival" value={flight.arrival} onChange={handleChange}  required/>
                        </div>
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

export default AddFlight;