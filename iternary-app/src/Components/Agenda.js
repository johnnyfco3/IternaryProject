import React, { useEffect, useState } from "react";
import { createAgenda, getByStopID, removeAgenda } from "../service/agendas";
import session from "../service/session";
import Itinerary from "./Itinerary";

export function Agenda({stop, email}){

    const [itinerary, setItinerary] = useState([])
    const [agendaForm, setAgendaForm] = useState({
        text: "",
        stopID: stop.id,
    })
    const [formActive, setFormActive] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const itinerary = await getByStopID(stop.id)
            setItinerary(itinerary)
        }
        fetchData()
    }, [stop])

    const agenda = itinerary.map((item, i) => {
        return (
            <div className="plan">
                <Itinerary item={item} email={email} index={i} removeAgenda={removeAgendas}/>
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
                setItinerary(prevState => [...prevState, res])
                setFormActive(false)
            }catch(err){
                console.log(err)
            }
        }
    }

    function toggleForm(){
        setFormActive(prevState => !prevState)
    }

    async function removeAgendas(e, id){
        e.stopPropagation();
        try{
            await removeAgenda(id)
            setItinerary(itinerary.filter((agenda) => agenda.id !== id))
        }
        catch(err){
            console.log(err)
        }
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