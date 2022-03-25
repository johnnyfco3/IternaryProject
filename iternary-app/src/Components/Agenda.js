import React, { useEffect, useState } from "react";
import itinerary from "../models/agenda";
import Itinerary from "./Itinerary";

export function Agenda({stop, id}){

    const [itineraryList, setItineraryList] = useState([])
    const [agendaForm, setAgendaForm] = useState({
        text: "",
    })
    const [formActive, setFormActive] = useState(false)

    useEffect(() => {
        setItineraryList(itinerary)
    }, [])

    const agenda = itineraryList.map((item, i) => {
        if(item.stopID === stop.id){
            return (
                <div className="plan">
                    <Itinerary item={item} id={id} index={i} removeAgenda={removeAgenda}/>
                </div>
            )
        }
    })

    function handleChange(e){
        setAgendaForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        if(agendaForm){
            itinerary.push({
                id: itinerary.length + 1,
                text: agendaForm.text,
                completed: false,
                stopID: stop.id
            })
            setItineraryList(prevState => [...prevState, agendaForm])

            setAgendaForm({
                text: ""
            })

            setFormActive(false)
        }
    }

    function toggleForm(){
        setFormActive(prevState => !prevState)
    }

    function removeAgenda(e, i, id){
        e.stopPropagation();
        itinerary.splice(i,1)
        setItineraryList(prevState => prevState.filter(plan => plan.id !== id))
    }

    return (
        <>
            {agenda}
            {formActive ? (
                <>
                <form onSubmit={handleSubmit} className="text-center">
                    <input className="form-control mx-4" id="plan" name="text" value={agendaForm.text} onChange={handleChange}></input>
                    <button className="btn btn-success px-4 mt-3">Submit</button>
                </form>
                <div className="cancel text-center">
                    <button className="btn btn-light px-4 my-3" onClick={toggleForm}>Cancel</button>
                </div>
                </>) : (
                <div className="add-itinerary text-center">
                    <button className="btn btn-light px-4 mt-5" onClick={toggleForm}>Add to Itinerary</button>
                </div>
                )
            }
        </>
    )
}

export default Agenda;