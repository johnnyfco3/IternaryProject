import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

export function AddAdventure(){

    const [newAdventure, setNewAdventure] = useState(
        {
            country: "",
            city: "",
            startD: "",
            endD: "",
            description: "",
            background: ""

        }
    )

    function handleSubmit(e){
        e.preventDefault();
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
                    <form class="row g-3 my-5" onSubmit={handleSubmit}>
                        <h1 className="heading">Location</h1>
                        <div class="col-md-6">
                            <label for="country" className="form-label">Country/State</label>
                            <input type="text" className="form-control" id="country" value={newAdventure.country} onChange={(event) => setNewAdventure(event.target.value)} required/>
                        </div>
                        <div class="col-md-6">
                            <label for="city" class="form-label">City</label>
                            <input type="text" class="form-control" id="city" value={newAdventure.city} onChange={(event) => setNewAdventure(event.target.value)} required/>
                        </div>
                        
                        <div className="date">
                            <h1 className="heading">Date</h1>
                            <div class="col-6">
                                <label for="start" class="form-label">Start Date</label>
                                <input type="date" class="form-control" id="start" value={newAdventure.startD} onChange={(event) => setNewAdventure(event.target.value)} required/>
                            </div>
                            <div class="col-6">
                                <label for="end" class="form-label">End Date</label>
                                <input type="date" class="form-control" id="end" value={newAdventure.endD} onChange={(event) => setNewAdventure(event.target.value)} required/>
                            </div>
                        </div>

                        <h1 className="heading">Tell us about the location</h1>
                        <div class="col-12">
                            <textarea id="description" rows={5} cols={100} value={newAdventure.description} onChange={(event) => setNewAdventure(event.target.value)} required/>
                        </div>

                        <h1 className="heading">Background Image</h1>
                        <div class="col-6">
                            <label for="inputState" class="form-label">Select an image</label>
                            <input type="file" class="form-control" id="inputGroupFile02" value={newAdventure.background} onChange={(event) => setNewAdventure(event.target.value)} required/>
                        </div>

                        <div class="col-12 text-center button">
                            <button type="submit" class="btn px-4">Submit</button>
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