import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import flightInfo from "../models/flights";

export function EditFlights(){

    const {adventureID} = useParams()
    const [flight, setFlight] = useState({})

    useEffect(() => {
        const info = flightInfo.find(flight => flight.adventureID === parseInt(adventureID))
        setFlight(info)
    }, [adventureID])

    return(
        <div id="edit-flight">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main className="card p-4 mt-3">
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">Edit Flight Information</h1>
                    </div>
                    
                    <form className="my-1">
                    <div class="row g-3">
                        <div className="col-md-6">
                            <h1 className="heading">Flight Number</h1>
                            <input type="text" className="form-control" id="number" name="number" placeholder={flight.number} />
                        </div>
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-4">
                            <h1 className="heading">From</h1>
                            <input type="text" className="form-control" id="from" name="from" placeholder={flight.from} />
                        </div>
                        <div className="col-md-4">
                            <h1 className="heading">To</h1>
                            <input type="text" className="form-control" id="to" name="to" placeholder={flight.to} />
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-3">
                            <h1 className="heading">Depart Time</h1>
                            <input type="text" className="form-control" id="depart" name="depart" placeholder={flight.depart}/>
                        </div>
                        <div className="col-md-3">
                            <h1 className="heading">Arrival Time</h1>
                            <input type="text" className="form-control" id="arrival" name="arrival" placeholder={flight.arrival}/>
                        </div>
                    </div>
                        <div className="col-12 text-center button">
                            <button type="submit" className="btn px-4">Save Changes</button>
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

export default EditFlights;