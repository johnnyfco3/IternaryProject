import React, { useEffect, useState } from "react";
import { createAgenda, getAgendas, getByStopID } from "../service/agendas";
import session from "../service/session";
import Itinerary from "./Itinerary";

export function Agenda({stop, email}){

    const [itinerary, setItinerary] = useState([])
    const [agendaForm, setAgendaForm] = useState({
        text: "",
        stopID: stop.id,
    })
    const [formActive, setFormActive] = useState(false)
    const [itineraryList, setItineraryList] = useState([])

    useEffect(() => {
        getByStopID(stop.id).then(data => {
            setItinerary(data)
        })
        getAgendas().then(data => {
            setItineraryList(data)
        })
    }, [stop])

    const agenda = itinerary.map((item, i) => {
        return (
            <div className="plan">
                <Itinerary item={item} email={email} index={i} removeAgenda={removeAgenda}/>
            </div>
        )
    })

    function handleChange(e){
        setAgendaForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(agendaForm){
            try{
                const res = await createAgenda(agendaForm);
                setAgendaForm({
                    text: "",
                    stopID: stop.id,
                })
                setItineraryList(prevState => [...prevState, res])
                setFormActive(false)
            }catch(err){
                console.log(err)
            }
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
            {email === session.user.email ? (
                formActive ? (
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
                ) : (
                    <></>
                )
            }
        </>
    )
}

export default Agenda;