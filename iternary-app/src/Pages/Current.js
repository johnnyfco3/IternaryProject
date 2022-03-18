import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import adventures from "../models/adventures";
import AdventureList from "../Components/AdventureList";
import Footer from "../Components/Footer";
import Introduction from "../Components/Introduction";
import Navbar from "../Components/Navbar";

export function Current({date}){

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

    let currentCount = 0
    const currentList = adventures.map((trip, i) => {
            if(trip.startD <= date && trip.endD >= date && trip.userID == id){
                currentCount++;
                return <AdventureList trip={trip} id={id} index={i} remove={remove}/>
            }
        })

    return (
        <div id="history">
            <header>
                <Navbar />
            </header>
            <div className="container">
                <Introduction id={id}/>
                <section className="current pt-5">
                    <button className="btn" onClick={() => navigate(-1)}><i class="fa-solid fa-arrow-left"></i> Go Back</button>
                    <h1 className="heading pb-4 text-center">Current Adventures ( {currentCount} )</h1>
                    <div className="row">
                        {currentList}
                        </div>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Current;