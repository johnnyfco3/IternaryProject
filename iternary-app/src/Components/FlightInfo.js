import React, { useState } from "react";
import { Link } from "react-router-dom";
import Airplane from "../Images/tusik-only-Fde7w9q0sWw-unsplash.jpg";
import flightInfo from "../models/flights";
import session from "../service/session";
import Flights from "./Flights";

export function FlightInfo({adventureID, email}){

    const [flightView, setFlightView] = useState(false)

    function toggleFlight(){
        setFlightView(prevState => !prevState)
    }

    const flights = flightInfo.map((flight, i) => {
        if(flight.adventureID === parseInt(adventureID)){
            return <Flights flight={flight} key={i}/>
        }
    })

    return(
        <section className="flight-info d-flex justify-content-center pt-5 reveal">
            <div className="col-10">
                <div className={`card ${flightView ? 'transform' : ''}`}>
                    <img src={Airplane} alt="Flight Info"/>
                    <div className="flight-header">
                        <h2 className="text-center">Flight Information</h2>
                        {email === session.user.email ? ( 
                            <Link to={`/edit-flights/${adventureID}`}><i className="fa-solid fa-pencil pt-2 px-3"></i></Link>
                            ) : (
                                <></>
                        )}
                    </div>
                    <div className="flight-content">
                        {flights}
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className={email === session.user.email ? "btn left" : "btn center"} onClick={toggleFlight}>{flightView ? 'Close' : 'View'}</button>
                        {email === session.user.email ? ( 
                            <Link to={`/add-flight/${adventureID}`}><button className="btn right">Add Flight</button></Link>
                            ) : (
                                <></>
                        )}
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default FlightInfo;