import React from "react";
import UserImage from "../Images/blank-profile-picture-gdf604cfb6_1280.png"
import { removeFriend } from "../service/friends";
import session from "../service/session";

export function FriendsList({user, handleClick, setIds}){

    async function removeFriends(e, id){
        e.preventDefault();
        try{
            await removeFriend(id ,session.user.userID);
            setIds(prevState => prevState.filter(item => item !== id))
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="col-lg-4">
            <div className="card shadow-lg mb-4">
                <i className="fa-solid fa-xmark delete" onClick={(e)=> removeFriends(e, user.userID)}></i>
                <div className="card-img-top text-center pt-1" onClick={(e) => handleClick(e, user.email)}>
                    <img src={user.profilePic === "" ? UserImage : user.profilePic}
                    alt="Friend" className="img-fluid rounded-circle"/>
                </div>
                <div className="content text-center pt-4" onClick={(e) => handleClick(e, user.email)}>
                    <h3>{user.firstName} {user.lastName}</h3>
                </div>
            </div>
        </div>
    )
}

export default FriendsList;