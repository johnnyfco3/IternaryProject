import React from "react";
import UserImage from "../Images/blank-profile-picture-gdf604cfb6_1280.png"
import { removeFriend } from "../service/friends";
import session from "../service/session";

export function FriendsList({user, handleClick, setEmails}){

    async function removeFriends(e, email){
        e.preventDefault();
        try{
            await removeFriend(session.user.email, email);
            setEmails(prevState => prevState.filter(item => item !== email))
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="col-lg-4">
            <div className="card shadow-lg mb-4">
                <i className="fa-solid fa-xmark delete" onClick={(e)=> removeFriends(e, user.email)}></i>
                <div className="card-img-top text-center pt-1" onClick={(e) => handleClick(e, user.email)}>
                    <img src={user.pic === "" ? UserImage : user.pic}
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