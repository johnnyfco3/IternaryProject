import React, { useState } from "react";
import { createFriend } from "../service/friends";
import session from "../service/session";
import { getByEmail } from "../service/users";

export function AddFriend({setIds}){

    const [formData, setFormData] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(e){
        e.preventDefault();

        const existUser = await getByEmail(formData)
        if(!existUser.errors){
            try{
                const res = await createFriend({
                    newFriend: existUser.data.userID, 
                    userID: session.user.userID}
                )
                if(res.errors){
                    setError(res.errors[0])
                }
                else{
                    setIds(prevState => {
                        return [...prevState, existUser.data.userID]
                    })
                }
                setFormData("")
            }
            catch(err){
                console.log(err)
            }
        }
        else{
            setError(existUser.errors[0])
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mt-5">
                <input type="email" className="form-control" id="email" name="email" value={formData} onChange={(e)=> setFormData(e.target.value)} placeholder="Search by Email"/>
                <button type="submit" className="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <p className="text-center mt-3 mb-5 error">{error}</p>
        </form>
    )
}

export default AddFriend;