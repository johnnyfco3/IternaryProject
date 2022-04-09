import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdventureList from "../Components/AdventureList";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { getAdventures, removeAdventure } from "../service/adventures";

export function Past({date}){

    const {email} = useParams();
    const [adventuresList, setAdventuresList] = useState([])
    
    useEffect(() =>{
        getAdventures(email).then(data => {
            setAdventuresList(data)
        })
    },[email])

    async function remove(e, id){
        e.stopPropagation();
        try{
            await removeAdventure(id)
            setAdventuresList(adventuresList.filter(adventure => adventure.id !== id))
        }
        catch(err){
            console.log(err)
        }
    }

    let navigate = useNavigate();

    const pastList = adventuresList.map((trip, i) => {
        if(trip.endD < date && trip.user === email){
            return <AdventureList trip={trip} email={email} index={i} remove={remove}/>
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