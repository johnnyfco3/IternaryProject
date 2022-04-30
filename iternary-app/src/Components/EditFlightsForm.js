import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getById, updateFlight } from "../service/flights";

export function EditFlightsForm({ id }) {

    const [editFlight, setEditFlight] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            if(id !== null){
                const flight = await getById(id)
                setEditFlight(flight.data)
            }
        }
        fetchData()
    }, [id])

    let navigate = useNavigate()

    function handleChange(event){
        setEditFlight(prevState =>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit(event){
        event.preventDefault()
        try{
            await updateFlight(editFlight.flightID, {
                number: editFlight.flightNumber,
                from: editFlight.departFrom,
                to: editFlight.arriveAt,
                depart: editFlight.depart,
                arrival: editFlight.arrive,
                adventureID: editFlight.adventureID
            })
            navigate(-1)
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <div id="edit-flight">
            <div className="container">
                <main className="p-4 mt-3">                    
                    <form className="my-1" onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <h1 className="heading">Flight Number</h1>
                            <input type="text" className="form-control" id="number" name="flightNumber" value={editFlight.flightNumber} onChange={handleChange}/>
                        </div>
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-4">
                            <h1 className="heading">From</h1>
                            <input type="text" className="form-control" id="from" name="departFrom" value={editFlight.departFrom} onChange={handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <h1 className="heading">To</h1>
                            <input type="text" className="form-control" id="to" name="arriveAt" value={editFlight.arriveAt} onChange={handleChange}/>
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-3">
                            <h1 className="heading">Depart Time</h1>
                            <input type="text" className="form-control" id="depart" name="depart" value={editFlight.depart} onChange={handleChange}/>
                        </div>
                        <div className="col-md-3">
                            <h1 className="heading">Arrival Time</h1>
                            <input type="text" className="form-control" id="arrival" name="arrive" value={editFlight.arrive} onChange={handleChange}/>
                        </div>
                    </div>
                        <div className="col-12 text-center button">
                            <button type="submit" className="btn px-4">Save Changes</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default EditFlightsForm;