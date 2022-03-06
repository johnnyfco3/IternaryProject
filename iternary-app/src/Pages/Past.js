import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdventureList from "../Components/AdventureList";
import Footer from "../Components/Footer";
import Introduction from "../Components/Introduction";
import Navbar from "../Components/Navbar";

export function Past({date, adventures, setAdventures, users}){

    const {id} = useParams();

    let navigate = useNavigate();

    function remove(e, id){
        e.stopPropagation();
        setAdventures(prevState => prevState.filter(adventure => adventure.id !== id))
    }

    let pastCount = 0
    const pastList = adventures.map((trip, i) => {
        if(trip.endD < date && trip.userID == id){
            pastCount++;
            return <AdventureList trip={trip} id={id} key={i} remove={remove}/>
        }
    })

    return (
        <div id="history">
            <header>
                <Navbar />
            </header>
            <div className="container">
                <Introduction users={users} id={id}/>
                <section className="current pt-5">
                    <button className="btn" onClick={() => navigate(-1)}><i class="fa-solid fa-arrow-left"></i> Go Back</button>
                    <h1 className="heading pb-4 text-center">Past Adventures ( {pastCount} )</h1>
                    <div className="row">
                        {pastList}
                        </div>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Past;