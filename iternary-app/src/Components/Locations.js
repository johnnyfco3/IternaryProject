import React, { useState } from "react";
import { Link }  from "react-router-dom";
import session from "../service/session";
import Agenda from "./Agenda";

export function Locations({stop, email, removeStop, index, allActive, setAllActive}) {

    const [active, setActive] = useState(false)

    function toggleActive(){
        setActive(prevState => !prevState)
        if(allActive){
            setAllActive(false)
            setActive(false)
        }
    }

    return(
        <div className="locations">
            <div className="locations-header d-flex justify-content-center">
                <h3 className="text-center">{stop.location}</h3>
                {email === session.user.email ? ( 
                        <Link to={`/edit-stops/${stop.id}`}><i className="fa-solid fa-pencil pt-2 px-3"></i></Link>
                        ) : (
                            <></>
                    )}
            </div>
            <div className={active || allActive ? "card mt-3 mx-2 active" : "card mt-3 mx-2"}>
                <div className="front">
                    <img src={stop.img} alt="Location" onClick={toggleActive}/>
                </div>
                <div className="back">
                    {email === session.user.email ? ( 
                        <i class="fa-solid fa-trash-can delete" onClick={(e)=> removeStop(e, index, stop.id)}></i>
                        ) : (
                            <></>
                    )}
                    <i className="fa-solid fa-arrow-left flip" onClick={toggleActive}></i>
                    <h3 className="title text-center">Agenda</h3>
                    <div className="agenda mt-5">
                        <Agenda stop={stop} email={email}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations