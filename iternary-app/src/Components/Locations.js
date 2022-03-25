import React, { useState } from "react";
import session from "../session";
import Agenda from "./Agenda";

export function Locations({stop, id, removeStop, index, allActive, setAllActive}) {

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
            <h3 className="text-center">{stop.location}</h3>
            <div className={active || allActive ? "card mt-3 mx-2 active" : "card mt-3 mx-2"}>
                <div className="front">
                    <img src={stop.img} alt="Location" onClick={toggleActive}/>
                </div>
                <div className="back">
                    {id == session.userID ? ( 
                        <i class="fa-solid fa-trash-can delete" onClick={(e)=> removeStop(e, index, stop.id)}></i>
                        ) : (
                            <></>
                    )}
                    <i className="fa-solid fa-arrow-left flip" onClick={toggleActive}></i>
                    <h3 className="title text-center">Agenda</h3>
                    <div className="agenda mt-5">
                        <Agenda stop={stop}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations