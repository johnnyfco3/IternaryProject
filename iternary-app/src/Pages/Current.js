import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdventureList from "../Components/AdventureList";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { getAdventures, removeAdventure } from "../service/adventures";
import { getByEmail } from "../service/users";

export function Current({date}){

    const {email} = useParams();
    const [adventuresList, setAdventuresList] = useState([])
    const [user, setUser] = useState({});
    
    useEffect(() =>{
        const fetchData = async () => {
            const list = await getAdventures()
            setAdventuresList(list)
            const user = await getByEmail(email)
            setUser(user)
        }
        fetchData()
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

    const currentList = adventuresList.map((trip, i) => {
            if(trip.startD <= date && trip.endD >= date && trip.userID === user.id){
                return <AdventureList trip={trip} email={email} index={i} remove={remove} key={i}/>
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
                    <h1 className="heading pb-4 text-center">Current Travels</h1>
                    <div className="row">
                        {currentList}
                        </div>
                </section>
            </div>
            <footer className="py-5">
                <Footer />
            </footer>
        </div>
    )
}

export default Current;