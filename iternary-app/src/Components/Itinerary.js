import React, { useState } from "react";
import itinerary from "../models/agenda";

export function Itinerary({item}){

    const [completed, setCompleted] = useState(item.completed)

    function toggleCompleted(e, id){
        itinerary.map(item => {
            if(item.id == id){
                item.completed = !item.completed
            }
        })

        setCompleted(prevState => !prevState)
    }

    return (
        <div className="item">
            <i className={item.completed ? "fa-solid fa-circle-check px-2 pt-2 completed" : "fa-regular fa-circle-check px-2 pt-2"}></i>
            <p className={item.completed ? 'completed' : ''} onClick={(e) => toggleCompleted(e, item.id)}>{item.text}</p>
        </div>
    )
}

export default Itinerary;