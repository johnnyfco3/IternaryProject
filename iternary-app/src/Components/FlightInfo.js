import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Airplane from "../Images/tusik-only-Fde7w9q0sWw-unsplash.jpg";
import { getByAdventure, removeFlight } from "../service/flights";
import session from "../service/session";
import Flights from "./Flights";

export function FlightInfo({adventureID, email}){

    const [flightView, setFlightView] = useState(false)
    const [flightInfo, setFlightInfo] = useState([])

    useEffect(() => {
        const  fetchData = async () => {
            const flight = await getByAdventure(parseInt(adventureID))
            setFlightInfo(flight)
        }
        fetchData()
    }, [adventureID])

    function toggleFlight(){
        setFlightView(prevState => !prevState)
    }

    async function removeFlights(e, id){
        e.stopPropagation();
        try{
            await removeFlight(id)
            setFlightInfo(prevState => prevState.filter(flight => flight.id !== id))
        }
        catch(err){
            console.log(err)
        }
    }

    const flights = flightInfo.map(flight => {
            return <Flights flight={flight} email={email} removeFlight={removeFlights}/>
        })

    return(
        <section className="flight-info d-flex justify-content-center pt-5 reveal">
            <div className="col-lg-10">
                <div className={`card ${flightView ? 'transform' : ''}`}>
                    <img src={Airplane} alt="Flight Info"/>
                    <div className="flight-header">
                        <h2 className="text-center">Flight Information</h2>
                        {email === session.user.email ? ( 
                            <Link to={`/edit-flights/${adventureID}`}><i className="fa-solid fa-pencil pt-2 px-3"></i></Link>
                            ) : (
                                <></>
                        )}
                    </div>
                    <div className="flight-content">
                        {flights}
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className={email === session.user.email ? "btn left" : "btn center"} onClick={toggleFlight}>{flightView ? 'Close' : 'View'}</button>
                        {email === session.user.email ? ( 
                            <Link to={`/add-flight/${adventureID}`}><button className="btn right">Add Flight</button></Link>
                            ) : (
                                <></>
                        )}
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default FlightInfo;