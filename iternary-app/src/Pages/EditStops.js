import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { getById } from "../service/stops";

export function EditStops(){

    const {stopID} = useParams()
    const [stop, setStop] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const stop = await getById(parseInt(stopID))
            setStop(stop)
        }
        fetchData()
    }, [stopID])

    return(
        <div id="edit-stop">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main className="card p-4 mt-3">
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">Edit Location Details</h1>
                    </div>
                    
                    <form className="my-1">
                        <h1 className="heading">Location</h1>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="location" name="location" placeholder={stop.location}/>
                        </div>
                    
                        <h1 className="heading mt-4">Image of Location</h1>
                        <div className="col-6">
                            <label htmlFor="image" className="form-label">Enter image URL</label>
                            <input type="url" className="form-control" id="image" name="img" placeholder={stop.img}/>
                        </div>

                        <div className="col-12 text-center button">
                            <button type="submit" className="btn px-4">Save Changes</button>
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

export default EditStops;