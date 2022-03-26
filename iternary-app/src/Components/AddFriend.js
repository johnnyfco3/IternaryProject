import React, { useState } from "react";
import friends from "../models/friends";
import users from "../models/users";
import session from "../service/session";

export function AddFriend({setEmails}){

    const [formData, setFormData] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        const existUser = users.find(user => user.email === formData)
        if(existUser){
            setEmails(prevState => {
                return [...prevState, formData]
            })
            
            const friend = friends.find(friend => friend.userID === session.userID)
            friend.friends.push(formData)
                
            setFormData("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group my-5">
                <input type="email" className="form-control" id="email" name="email" aria-describedby="inputGroupPrepend" value={formData} onChange={(e)=> setFormData(e.target.value)} placeholder="Search by Email"/>
                <button type="submit" className="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>
    )
}

export default AddFriend;