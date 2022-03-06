import React from "react";
import { Link, useParams } from "react-router-dom";

export function AdventureList({trip}){

    const {id} = useParams();

    return (
        <div className="position col-6">
            <Link to={`/overview/${trip.id}/${id}`}>
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