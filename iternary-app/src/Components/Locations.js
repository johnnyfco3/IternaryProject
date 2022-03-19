import React from "react";
import session from "../session";
import Agenda from "./Agenda";

export function Locations({stop, id, removeStop, index}){
    return(
        <div className="locations">
            <h3 className="text-center">{stop.name}</h3>
            <div className="card mt-3 mx-2">
                <div className="front">
                    <img src={stop.img} alt="Location" />
                </div>
                <div className="back">
                    {id == session.userID ? ( 
                        <i class="fa-solid fa-xmark delete" onClick={(e)=> removeStop(e, index, stop.id)}></i>
                        ) : (
                            <></>
                    )}
                    <h3 className="title text-center">Agenda</h3>
                    <div className="agenda pt-5">
                        <Agenda />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations