import React, { useState } from "react";
import Airplane from "../Images/tusik-only-Fde7w9q0sWw-unsplash.jpg";
import flightInfo from "../models/flights";
import Flights from "./Flights";

export function FlightInfo({adventureID}){

    const [flightView, setFlightView] = useState(false)

    function toggleFlight(){
        setFlightView(prevState => !prevState)
    }

    const flights = flightInfo.map((flight, i) => {
        if(flight.adventureID == adventureID){
            return <Flights flight={flight} key={i}/>
        }
    })

    return(
        <section className="flight-info d-flex justify-content-center pt-5 reveal">
            <div className="col-10">
                <div className={`card ${flightView ? 'transform' : ''}`}>
                    <img src={Airplane} alt="Flight Info"/>
                    <h2 className="text-center">Flight Information</h2>
                    <div className="flight-content">
                        {flights}
                    </div>
                    <button className="btn" onClick={toggleFlight}>{flightView ? 'Close' : 'View'}</button>
                </div>
            </div>
        </section>
    )
}

export default FlightInfo;