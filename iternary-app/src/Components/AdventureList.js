import React from "react";
import { Link } from "react-router-dom";

export function AdventureList(props){

    return (
        <div className="position col-6">
            <Link to={`/overview/${props.trip.id}`}>
                <div className="card">
                    <img src={props.trip.background} alt="Travels"/>
                </div>
                <div className="card-content">
                    <h1 className="title">{props.trip.country}</h1>
                    <h3 className="subtitle">{props.trip.city}</h3>
                    <p>{props.trip.startD} - {props.trip.endD} 2021</p>
                </div>
            </Link>
        </div>
    )
}

export default AdventureList;