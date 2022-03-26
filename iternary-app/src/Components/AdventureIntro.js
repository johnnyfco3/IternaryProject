import React from "react";
import { useNavigate } from "react-router-dom";

export function AdventureIntro({location}){

    let navigate = useNavigate()

    return (
        <>
            <button className="btn pb-4 back" onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left"></i> Go Back</button>
            <h1>{location.location}</h1>
            <div className="row top">
                <div className="col-1 me-4 mb-5">
                    <div className="circle rounded-circle text-center">
                        <p>{location.startD}</p>
                    </div>
                </div>
                <div className="col-10 info">
                    <p>{location.description}</p>
                </div>
            </div>
            <div className="discover me-5">
                <a href={location.link} target="_blank" rel="noreferrer"><button className="btn px-4 mt-3">Discover</button></a>
            </div>
        </>    
    )
}

export default AdventureIntro;