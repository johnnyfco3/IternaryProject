import React from "react";
import { Link } from "react-router-dom";

export function AdventureList({trip}){

    return (
        <div className="position col-6">
            <Link to={`/overview/${trip.id}`}>
                <div className="card">
                    <img src={trip.background} alt="Travels"/>
                </div>
                <div className="card-content">
                    <h1 className="title">{trip.country}</h1>
                    <h3 className="subtitle">{trip.city}</h3>
                    <p>{trip.startD} - {trip.endD} 2021</p>
                </div>
            </Link>
        </div>
    )
}

export default AdventureList;