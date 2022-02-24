import React, { useState } from "react";
import session from "../session";

export function AddFriend({users, friends, setFriends}){

    const [formData, setFormData] = useState("")

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
            setFriends(friends.map(friend=>{
                if(friend.userID === session.userID){
                    friend.friends.push(formData)
                }
             }))
        }
        console.log(friends)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group my-5">
                <span className="input-group-text" id="inputGroupPrepend"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="inputGroupPrepend" value={formData.email} onChange={(e)=> setFormData(e.target.value)}/>
                <button type="submit" className="btn btn-primary">Add Friend</button>
            </div>
        </form>
    )
}

export default AddFriend;