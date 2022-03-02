import React, { useState } from "react";

export function FlightInfo(){

    const [flightView, setFlightView] = useState(false)

    function toggleFlight(){
        setFlightView(prevState => !prevState)
    }

    return(
        <section className="flight-info d-flex justify-content-center pt-5">
            <div className="col-10">
                <div className={`card ${flightView ? 'active' : ''}`}>
                    <img src="https://images.unsplash.com/photo-1575116464504-9e7652fddcb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt=""/>
                    <h2 className="text-center">Flight Information</h2>
                    <div className="flight-content">
                        <h3 className="text-center">BA2540</h3>
                        <div className="row">
                            <div className="col-4 text-center">
                                <a href="">JFK</a>
                                <p className="pt-1">07:00</p>
                            </div>
                            <div className="col-4 text-center">
                                <div className="bar">
                                    <div className="progressing"></div>
                                    <span className="circle-bar"></span>
                                </div>
                                <p className="pt-1">0 minutes remaining</p>
                            </div>
                            <div className="col-4 text-center">
                                <a href="">LGA</a>
                                <p className="pt-1">10:30</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn" onClick={toggleFlight}>{flightView ? 'Close' : 'View'}</button>
                </div>
            </div>
        </section>
    )
}

export default FlightInfo;