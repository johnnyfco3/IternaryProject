import React, { useState } from "react";
import friends from "../models/friends";
import users from "../models/users";
import session from "../session";

export function AddFriend({setEmails}){

    const [formData, setFormData] = useState("")

    const [user, setUser] = useState({})

    function handleSubmit(e){
        e.preventDefault();
        let exist = false;
        users.map(user=>{
            if(user.email === formData){
                exist = true
                return exist
            }
        })
        if(exist){
            users.map(user => {
                if(user.id === session.userID){
                    setUser(user)
                }
            })
            friends.map(friend=>{
                if(friend.userID === user.id){
                    friend.friends.push(formData)
                }
            })
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