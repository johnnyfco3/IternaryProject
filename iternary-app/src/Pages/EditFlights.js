import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditFlightsForm from "../Components/EditFlightsForm";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { getByAdventure } from "../service/flights";

export function EditFlights(){

    const {adventureID} = useParams()
    const [flights, setFlights] = useState([])
    const [formView, setFormView] = useState({
        isVisible: false,
        flightID: null
    })

    useEffect(() => {
        const fetchData = async () => {
            const flight = await getByAdventure(parseInt(adventureID))
            if(flight.errors === undefined){
                setFlights(flight.data)
            }
        }
        fetchData()
    }, [adventureID])

    const form = flights.map((flight, i) => {
        return (
            <>
                <p onClick={(e) => toggleForm(e, flight.flightID)}>{`Flight Information ${i+1}`}</p>
            </>
        )
    })

    function toggleForm(e, id){
        e.stopPropagation()
        setFormView({
            isVisible: true,
            flightID: id
        })
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
                    <div className="selections mt-4">
                        <h2>Click on specific flight info to edit:</h2>
                        {form}
                        <EditFlightsForm id={formView.flightID} />
                    </div>
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default EditFlights;