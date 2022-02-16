import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

export function AddAdventure(){
    return (
        <div id="add-adventure">
            <Navbar />

            <div className="container">
                <div className="top-content mt-4 text-center">
                    <h1 className="title">Where Are You Heading?</h1>
                </div>
                <main>
                    <form class="row g-3 my-5">
                        <h1 className="heading">Location</h1>
                        <div class="col-md-6">
                            <label for="country" className="form-label">Country/State</label>
                            <input type="text" className="form-control" id="country" />
                        </div>
                        <div class="col-md-6">
                            <label for="city" class="form-label">City</label>
                            <input type="text" class="form-control" id="city" />
                        </div>
                        
                        <div className="date">
                            <h1 className="heading">Date</h1>
                            <div class="col-6">
                                <label for="start" class="form-label">Start Date</label>
                                <input type="date" class="form-control" id="start" />
                            </div>
                            <div class="col-6">
                                <label for="end" class="form-label">End Date</label>
                                <input type="date" class="form-control" id="end" />
                            </div>
                        </div>

                        <h1 className="heading">Tell us about the location</h1>
                        <div class="col-12">
                            <textarea id="description" rows={5} cols={100}></textarea>
                        </div>

                        <h1 className="heading">Background Image</h1>
                        <div class="col-6">
                            <label for="inputState" class="form-label">Select an image</label>
                            <input type="file" class="form-control" id="inputGroupFile02" />
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