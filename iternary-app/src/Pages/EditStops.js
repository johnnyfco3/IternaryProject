import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { getById, updateStop } from "../service/stops";

export function EditStops(){

    const {stopID} = useParams()
    const [editStop, setEditStop] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const stop = await getById(parseInt(stopID))
            setEditStop(stop.data)
        }
        fetchData()
    }, [stopID])

    let navigate = useNavigate()

    function handleChange(event){
        setEditStop(prevState =>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit(event){
        event.preventDefault()
        try{
            await updateStop(stopID, editStop)
            navigate(-1)
        }
        catch(err){
            console.log(err)
        }
    }


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
                    
                    <form className="my-1" onSubmit={handleSubmit}>
                        <h1 className="heading">Location</h1>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="location" name="location" value={editStop.location} onChange={handleChange}/>
                        </div>
                    
                        <h1 className="heading mt-4">Image of Location</h1>
                        <div className="col-6">
                            <label htmlFor="image" className="form-label">Enter image URL</label>
                            <input type="url" className="form-control" id="image" name="img" value={editStop.image} onChange={handleChange}/>
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