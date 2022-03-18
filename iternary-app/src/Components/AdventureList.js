import React from "react";
import { Link } from "react-router-dom";
import session from "../session"

export function AdventureList({trip, id, remove, index}){

    return (
        <div className="position col-6">
                <div className="card">
                    {id == session.userID ? (
                        <i class="fa-solid fa-xmark delete" onClick={(e)=> remove(e, index, trip.id)}></i>
                        ) : (
                            <></>
                        )}
                    <Link to={`/overview/${trip.id}/${id}`}><img src={trip.background} alt="Travels"/></Link>
                </div>
                <div className="card-content">
                    <h1 className="title">{trip.country}</h1>
                    <h3 className="subtitle">{trip.city}</h3>
                    <p>{trip.startD} - {trip.endD} 2021</p>
                </div>
        </div>
    )
}

export default AdventureList;