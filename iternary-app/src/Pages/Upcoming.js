import React from "react";
import { Link, useParams } from "react-router-dom";
import AdventureList from "../Components/AdventureList";
import Footer from "../Components/Footer";
import Introduction from "../Components/Introduction";
import Navbar from "../Components/Navbar";

export function Upcoming({date, adventures, users}){

    const {id} = useParams()

    let upcomingCount = 0
    const upcomingList = adventures.map(trip => {
        if(trip.startD > date && trip.userID == id){
            upcomingCount++
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
                <Link to={"/history"}><button className="btn"><i class="fa-solid fa-arrow-left"></i> Go Back</button></Link>
                <h1 className="heading pb-4 text-center">Upcoming Adventures ( {upcomingCount} )</h1>
                    <div className="row">
                        {upcomingList}
                    </div>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Upcoming;