import React, { useState } from "react";
import itinerary from "../models/agenda";
import session from "../session";

export function Itinerary({item, id, removeAgenda, index}){

    const [completed, setCompleted] = useState(item.completed)

    function toggleCompleted(e, id){
        const plan = itinerary.find(plan => plan.id === id)
        plan.completed = !plan.completed

        setCompleted(prevState => !prevState)
    }

    return (
        <>
            {parseInt(id) === session.userID ? ( 
                <i class="fa-solid fa-xmark delete" onClick={(e)=> removeAgenda(e, index, item.id)}></i>
                ) : (
                    <></>
            )}
            <div className="item">
                <i className={item.completed ? "fa-solid fa-circle-check px-2 pt-2 completed" : "fa-regular fa-circle-check px-2 pt-2"}></i>
                <p className={item.completed ? 'completed' : ''} onClick={(e) => toggleCompleted(e, item.id)}>{item.text}</p>
            </div>
        </>
    )
}

export default Itinerary;