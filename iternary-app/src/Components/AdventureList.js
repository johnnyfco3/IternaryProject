import React from "react";
import { Link } from "react-router-dom";
import session from "../session"

export function AdventureList({trip, id, remove, index}){

    return (
        <div className="position col-6">
                <Link to={`/overview/${trip.id}/${id}`}><div className="card">
                    {id == session.userID ? (
                        <i class="fa-solid fa-xmark delete" onClick={(e)=> remove(e, index, trip.id)}></i>
                        ) : (
                            <></>
                        )}
                </div></Link>
                <div className="card-content">
                    <img src={trip.background} alt="Travels"/>
                    <h1 className="title">{trip.location}</h1>
                    <h6 className="desc">{trip.description}</h6>
                    <p>{trip.startD} - {trip.endD} 2021</p>
                </div>
        </div>
    )
}

export default AdventureList;