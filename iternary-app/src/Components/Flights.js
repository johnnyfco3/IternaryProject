import React from "react";
import session from "../service/session";

export function Flights({flight, email, removeFlight}){
    return (
        <div className="flights">
        {email === session.user.email ? ( 
                <i className="fa-solid fa-xmark delete" onClick={(e)=> removeFlight(e, flight.flightID)}></i>
                ) : (
                    <></>
        )}
        <h3 className="text-center">{flight.flightNumber}</h3>
        <div className="row">
            <div className="col-4 text-center">
                <a href="">{flight.departFrom}</a>
                <p className="pt-1">{flight.depart}</p>
            </div>
            <div className="col-4 text-center">
                <div className="bar">
                    <div className="progressing"></div>
                    <span className="circle-bar"></span>
                </div>
                <p className="pt-1">0 minutes remaining</p>
            </div>
            <div className="col-4 text-center">
                <a href="">{flight.arriveAt}</a>
                <p className="pt-1">{flight.arrive}</p>
            </div>
        </div>
        </div>
    )
}

export default Flights;