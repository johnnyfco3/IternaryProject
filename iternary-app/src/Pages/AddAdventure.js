import React from "react";
import Navbar from "../Components/Navbar";

export function AddAdventure(){
    return (
        <div id="add-adventure">
            <Navbar />

            <div className="container">
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
                        
                        <h1 className="heading">Date</h1>
                        <div class="col-6">
                            <label for="start" class="form-label">Start Date</label>
                            <input type="date" class="form-control" id="start" />
                        </div>
                        <div class="col-6">
                            <label for="end" class="form-label">End Date</label>
                            <input type="date" class="form-control" id="end" />
                        </div>

                        <h1 className="heading">Tell us about the location</h1>
                        <div class="col-12">
                            <textarea id="description" rows={5} cols={100}></textarea>
                        </div>

                        <h1 className="heading">Background Image</h1>
                        <div class="col-8">
                            <label for="inputState" class="form-label">Select an image for background display</label>
                            <input type="file" class="form-control" id="inputGroupFile02" />
                        </div>

                        <h1 className="heading">Start off with your first post <em>(optional)</em></h1>
                        <div class="col-8">
                            <input type="file" class="form-control" id="inputGroupFile02" />
                        </div>

                        <div class="col-12 text-center">
                            <button type="submit" class="btn btn-primary px-4">Sign in</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default AddAdventure;