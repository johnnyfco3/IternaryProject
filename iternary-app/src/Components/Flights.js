import React from "react";

export function Flights({flight}){
    return (
        <>
        <h3 className="text-center">{flight.number}</h3>
        <div className="row">
            <div className="col-4 text-center">
                <a href="">{flight.from}</a>
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
                <a href="">{flight.to}</a>
                <p className="pt-1">{flight.arrival}</p>
            </div>
        </div>
        </>
    )
}

export default Flights;