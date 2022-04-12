import React from "react";
import { Link } from "react-router-dom";
import session from "../service/session"

export function AdventureList({trip, email, remove, index}){

    return (
        <div className="position col-lg-6">
                <Link to={`/overview/${trip.id}/${email}`}><div className="card">
                    {email === session.user.email ? (
                        <i className="fa-solid fa-xmark delete" onClick={(e)=> remove(e, index, trip.id)}></i>
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