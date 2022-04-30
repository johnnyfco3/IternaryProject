import React, { useState } from "react";
import { updateAgenda } from "../service/agendas";
import session from "../service/session";

export function Itinerary({item, email, removeAgenda}){

    const [completed, setCompleted] = useState(item.completed)

    async function toggleCompleted(e, id){
        e.preventDefault();
        const data = {
            text: item.text,
            completed: !completed,
            stopID: item.stopID
        }
        try{
            await updateAgenda(id, data);
            setCompleted(prevState => !prevState)
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <>
            {email === session.user.email ? ( 
                <i className="fa-solid fa-xmark delete" onClick={(e)=> removeAgenda(e, item.agendaID)}></i>
                ) : (
                    <></>
            )}
            <div className="item">
                <i className={completed ? "fa-solid fa-circle-check px-2 pt-2 completed" : "fa-regular fa-circle-check px-2 pt-2"}></i>
                {email === session.user.email ? (
                    <p className={completed ? 'completed' : ''} onClick={(e) => toggleCompleted(e, item.agendaID)}>{item.text}</p>
                ) : (
                    <p className={completed ? 'completed' : ''}>{item.text}</p>
                )}
            </div>
        </>
    )
}

export default Itinerary;