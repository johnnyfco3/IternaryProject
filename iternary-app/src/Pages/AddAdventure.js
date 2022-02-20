import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import { useNavigate } from "react-router-dom";
import session from "../session";

export function AddAdventure(){

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

    const [newAdventure, setNewAdventure] = useState(
        {
            country: "",
            city: "",
            startD: "",
            endD: "",
            description: "",
            background: "",
            link: ""
        }
    )

    function handleChange(event){
        setNewAdventure(prevState =>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    let navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        setAdventures(
            adventures.push(
                {
                    id: adventures.length + 1,
                    country: newAdventure.country,
                    city: newAdventure.city,
                    startD: newAdventure.startD,
                    endD: newAdventure.endD,
                    background: newAdventure.background,
                    description: newAdventure.description,
                    link: newAdventure.link,
                    current: true,
                    userID: session.userID
                }
            )
        )

        setNewAdventure({
            country: "",
            city: "",
            startD: "",
            endD: "",
            description: "",
            background: "",
            link: ""
        })

        navigate(`/history/${session.userID}`)
    }

    return (
        <div id="add-adventure">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main>
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">Where Are You Heading?</h1>
                    </div>
                    <form className="row g-3 my-5" onSubmit={handleSubmit}>
                        <h1 className="heading">Location</h1>
                        <div class="col-md-6">
                            <label htmlFor="country" className="form-label">Country/State</label>
                            <input type="text" className="form-control" id="country" name="country" value={newAdventure.country} onChange={handleChange} required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" name="city" value={newAdventure.city} onChange={handleChange} required/>
                        </div>
                        
                        <div className="date">
                            <h1 className="heading">Date</h1>
                            <div className="col-6">
                                <label htmlFor="start" className="form-label">Start Date</label>
                                <input type="date" className="form-control" id="start" name="startD" value={newAdventure.startD} onChange={handleChange} required/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="end" className="form-label">End Date</label>
                                <input type="date" className="form-control" id="end" name="endD" value={newAdventure.endD} onChange={handleChange} required/>
                            </div>
                        </div>

                        <h1 className="heading">Tell us about the location</h1>
                        <div className="col-12">
                            <textarea id="description" rows={5} cols={100} name="description" value={newAdventure.description} onChange={handleChange} required/>
                        </div>

                        <h1 className="heading">Background Image</h1>
                        <div className="col-6">
                            <label htmlFor="inputState" className="form-label">Enter the URL of image</label>
                            <input type="url" class="form-control" id="inputGroupFile02" name="background" value={newAdventure.background} onChange={handleChange} required/>
                        </div>

                        <h1 className="heading">Google Link of Location</h1>
                        <div className="col-md-8">
                            <input type="url" className="form-control" name="link" value={newAdventure.link} onChange={handleChange} required/>
                        </div>

                        <div className="col-12 text-center button">
                            <button type="submit" className="btn px-4">Submit</button>
                        </div>
                    </form>
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default AddAdventure;