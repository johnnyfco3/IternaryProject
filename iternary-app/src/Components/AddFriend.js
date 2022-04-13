import React, { useState } from "react";
import session from "../service/session";
import { getByEmail } from "../service/users";
import { addFriends } from "../service/friends";

export function AddFriend({setEmails}){

    const [formData, setFormData] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(e){
        e.preventDefault();

        const existUser = await getByEmail(formData)
        if(!existUser.errors){
            setEmails(prevState => {
                return [...prevState, formData]
            })
            
            try{
                await addFriends(session.user.email, formData)
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