import React from "react";
import itinerary from "../models/agenda";
import Itinerary from "./Itinerary";

export function Agenda({stop}){

    const agenda = itinerary.map(item => {
        if(item.stopID === stop.id){
            return (
                <Itinerary item={item}/>
            )
        }
    })
    return (
        <>
            {agenda}
            <div className="add-itinerary text-center">
                <button className="btn btn-light px-4 mt-5">Add to Itinerary</button>
            </div>
        </>
    )
}

export default Agenda;