import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdventureList from "../Components/AdventureList";
import Footer from "../Components/Footer";
import Introduction from "../Components/Introduction";
import Navbar from "../Components/Navbar";

export function Current({date, adventures, users}){

    const {id} = useParams();

    let navigate = useNavigate();

    let currentCount = 0
    const currentList = adventures.map(trip => {
            if(trip.startD <= date && trip.endD >= date && trip.userID == id){
                currentCount++;
                return <AdventureList trip={trip}/>
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