import React, { useState } from "react";
import session from "../service/session";
import { getByEmail } from "../service/users";
import { addFriends } from "../service/friends";

export function AddFriend({setEmails}){

    const [formData, setFormData] = useState("")

    async function handleSubmit(e){
        e.preventDefault();

        const existUser = await getByEmail(formData)
        if(existUser){
            setEmails(prevState => {
                return [...prevState, formData]
            })
            
            try{
                await addFriends(session.user.id, formData)
                setFormData("")
            }
            catch(err){
                console.log(err)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group my-5">
                <input type="email" className="form-control" id="email" name="email" value={formData} onChange={(e)=> setFormData(e.target.value)} placeholder="Search by Email"/>
                <button type="submit" className="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>
    )
}

export default AddFriend;