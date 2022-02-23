import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdventureList from "../Components/AdventureList";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import session from "../session";

export function History({users, adventures}){

    const [user, setUser] = useState({})

    useEffect(()=>{
        users.map(user =>{
            if(user.id == session.userID){
                setUser(user)
            }
        })
    }, [users])
    
    let currentCount = 0
    const currentList = adventures.map(trip => {
            if(trip.current && trip.userID == session.userID){
                currentCount++
                return <AdventureList trip={trip}/>
            }
        })
    
    let pastCount = 0
    const pastList = adventures.map(trip => {
        if(!trip.current && trip.userID == session.userID){
            pastCount++
            return <AdventureList trip={trip}/>
        }
    })
    
    const today = new Date()
    const hour = today.getHours()

    function determineTime(){
        if(hour < 12 && hour > 2){
            return "Good Morning"
        }
        else if(hour > 12 && hour < 19){
            return "Good Afternoon"
        }
        else{
            return "Good Night"
        }
    }

    return (
        <div id="history">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main>
                    <div className="top-content text-center pt-4">
                        <h2>{determineTime()} {user.firstName}</h2>
                        <blockquote>{user.quote}
                            <cite> - {user.firstName} {user.lastName}</cite>
                        </blockquote>
                    </div>
                    
                    <section className="current row pt-5">
                        <h1 className="heading pb-4">Current Adventures ( {currentCount} )</h1>
                        <div className="row">
                            {currentList}
                            </div>
                    </section>

                    <section className="past pt-5">
                        <h1 className="heading pb-4">Past Adventures ( {pastCount} )</h1>
                        <div className="row">
                            {pastList}
                        </div>
                    </section>

                    <section className="add-new text-center mt-5 px-4">
                        <Link to="/add-adventure"><button className="btn">Start a New Adventure</button></Link>
                    </section>
                </main>
            
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default History;