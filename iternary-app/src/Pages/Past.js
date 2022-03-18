import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import adventures from "../models/adventures";
import AdventureList from "../Components/AdventureList";
import Footer from "../Components/Footer";
import Introduction from "../Components/Introduction";
import Navbar from "../Components/Navbar";

export function Past({date}){

    const {id} = useParams();
    const [adventuresList, setAdventuresList] = useState([])
    
    useEffect(() =>{
        setAdventuresList(adventures)
    },[])

    function remove(e, i, id){
        e.stopPropagation();
        adventures.splice(i,1)
        setAdventuresList(prevState => prevState.filter(loc => loc.id !== id))
    }

    let navigate = useNavigate();

    const pastList = adventures.map((trip, i) => {
        if(trip.endD < date && trip.userID == id){
            return <AdventureList trip={trip} id={id} index={i} remove={remove}/>
        }
    })

    return (
        <div id="history">
            <header>
                <Navbar />
            </header>
            <div className="container">
                <section className="current pt-5">
                    <button className="btn" onClick={() => navigate(-1)}><i class="fa-solid fa-arrow-left"></i> Go Back</button>
                    <h1 className="heading pb-4 text-center">Past Travels</h1>
                    <div className="row">
                        {pastList}
                        </div>
                </section>
            </div>
            <footer className="py-5">
                <Footer />
            </footer>
        </div>
    )
}

export default Past;