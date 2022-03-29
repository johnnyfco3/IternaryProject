import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export function AddFlight(){
    return(
        <div id="add-flight">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main>
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">Flight Information</h1>
                    </div>
                    
                    <form className="my-1">
                    <div class="row g-3">
                        <div className="col-md-6">
                            <h1 className="heading">Flight Number</h1>
                            <input type="text" className="form-control" id="number" name="number" required/>
                        </div>
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-4">
                            <h1 className="heading">From</h1>
                            <input type="text" className="form-control" id="from" name="from" placeholder='Input Airport Abbreviation' required/>
                        </div>
                        <div className="col-md-4">
                            <h1 className="heading">To</h1>
                            <input type="text" className="form-control" id="to" name="to" placeholder='Input Airport Abbreviation' required/>
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-3">
                            <h1 className="heading">Depart Time</h1>
                            <input type="time" className="form-control" id="depart" name="depart" required/>
                        </div>
                        <div className="col-md-3">
                            <h1 className="heading">Arrival Time</h1>
                            <input type="time" className="form-control" id="arrival" name="arrival" required/>
                        </div>
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

export default AddFlight;