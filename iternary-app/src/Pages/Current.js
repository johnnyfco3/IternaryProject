import React from "react";
import { Link } from "react-router-dom";
import AdventureList from "../Components/AdventureList";
import Footer from "../Components/Footer";
import Introduction from "../Components/Introduction";
import Navbar from "../Components/Navbar";
import session from "../session";

export function Current({date, adventures, users}){

    let currentCount = 0
    const currentList = adventures.map(trip => {
            if(trip.startD <= date && trip.endD >= date && trip.userID === session.userID){
                currentCount++
                return <AdventureList trip={trip}/>
            }
        })

    return (
        <div id="history">
            <header>
                <Navbar />
            </header>
            <div className="container">
                <Introduction users={users}/>
                <section className="current pt-5">
                    <Link to={"/history"}><button className="btn"><i class="fa-solid fa-arrow-left"></i></button></Link>
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