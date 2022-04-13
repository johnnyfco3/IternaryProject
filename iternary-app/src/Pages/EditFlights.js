import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { getByAdventure, updateFlight } from "../service/flights";

export function EditFlights(){

    const {adventureID} = useParams()
    const [editFlight, setEditFlight] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const flight = await getByAdventure(parseInt(adventureID))
            setEditFlight(flight)
        }
        fetchData()
    }, [adventureID])

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
            await updateFlight(editFlight.id, editFlight)
            navigate(-1)
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <div id="edit-flight">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main className="card p-4 mt-3">
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">Edit Flight Information</h1>
                    </div>
                    
                    <form className="my-1" onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <h1 className="heading">Flight Number</h1>
                            <input type="text" className="form-control" id="number" name="number" value={editFlight.number} onChange={handleChange}/>
                        </div>
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-4">
                            <h1 className="heading">From</h1>
                            <input type="text" className="form-control" id="from" name="from" value={editFlight.from} onChange={handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <h1 className="heading">To</h1>
                            <input type="text" className="form-control" id="to" name="to" value={editFlight.to} onChange={handleChange}/>
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-3">
                            <h1 className="heading">Depart Time</h1>
                            <input type="text" className="form-control" id="depart" name="depart" value={editFlight.depart} onChange={handleChange}/>
                        </div>
                        <div className="col-md-3">
                            <h1 className="heading">Arrival Time</h1>
                            <input type="text" className="form-control" id="arrival" name="arrival" value={editFlight.arrival} onChange={handleChange}/>
                        </div>
                    </div>
                        <div className="col-12 text-center button">
                            <button type="submit" className="btn px-4">Save Changes</button>
                        </div>
                    </form>
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default EditFlights;