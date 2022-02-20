import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdventureList from "../Components/AdventureList";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import session from "../session";

export function History(){

    const [users, setUsers] = useState([
        { 
            id: 1,
            firstName: "Johnny", 
            lastName: "Tejada", 
            birthday: "07-03-2000", 
            email: "example@gmail.com", 
            password: "12345", 
            quote: "Let's make today a memorable one!"
        },
        { 
            id: 2,
            firstName: "John", 
            lastName: "Smith", 
            birthday: "05-10-1999", 
            email: "example1@gmail.com", 
            password: "123456", 
            quote: "Hey there, lets travel together!!"
        },
    ])

    const [user, setUser] = useState({})

    useEffect(()=>{
        users.map(user =>{
            if(user.id == session.userID){
                setUser(user)
            }
        })
    }, [users])

    const [adventures, setAdventures] = useState([
        { 
            id: 1, 
            country: "New York", 
            city: "New York City", 
            startD: "2022-06-11", 
            endD: "2022-07-03", 
            background: "https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
            description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.",
            link: "https://goo.gl/maps/Dsd9XgPXUDoFBR9F8", 
            current: true,
            userID: 1 
        },
        { 
            id: 2, 
            country: "Australia", 
            city: "Sydney", 
            startD: "2021-02-20", 
            endD: "2021-03-03", 
            background: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", 
            description: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbour front Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.",
            link: "https://goo.gl/maps/qc9N74ZiEbnoL8mVA",
            current: false,
            userID: 1  
        },
        { 
            id: 3, 
            country: "Italy", 
            city: "Venice", 
            startD: "2021-12-25", 
            endD: "2021-12-31", 
            background: "https://images.unsplash.com/photo-1480548004877-593316be2bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
            description: "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.",
            link: "https://goo.gl/maps/jdAxNDCYgBXoLdY69",
            current: false,
            userID: 1 
        },
        { 
            id: 4, 
            country: "Europe", 
            city: "France", 
            startD: "2022-02-26", 
            endD: "2022-02-26", 
            background: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
            description: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.",
            link: "https://goo.gl/maps/Y6z271kWarFVRdG17",
            current: true,
            userID: 2  
        }
    ])
    
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