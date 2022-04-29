import React from "react";
import { Link } from "react-router-dom";
import session from "../service/session"

export function AdventureList({trip, email, remove}){

    return (
        <div className="position col-lg-6">
                <Link to={`/overview/${trip.adventureID}/${email}`}><div className="card">
                    {email === session.user.email ? (
                        <i className="fa-solid fa-xmark delete" onClick={(e)=> remove(e, trip.id)}></i>
                        ) : (
                            <></>
                        )}
                </div></Link>
                <div className="card-content">
                    <img src={trip.backgroundImg} alt="Travels"/>
                    <h1 className="title">{trip.location}</h1>
                    <h6 className="desc">{trip.description}</h6>
                    <p>{trip.startDate} - {trip.endDate}</p>
                </div>
        </div>
    )
}

export default AdventureList;