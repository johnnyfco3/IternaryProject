import React from "react";
import UserImage from "../Images/blank-profile-picture-gdf604cfb6_1280.png"
import friends from "../models/friends";
import session from "../session";

export function FriendsList({user, handleClick, setEmails}){

    function removeFriends(e, email){
        e.preventDefault();
        const friend = friends.find(friend => friend.userID === session.userID)
        const index = friend.friends.indexOf(email)
        friend.friends.splice(index, 1)
        setEmails(prevState => {
            return prevState.filter(e => e !== email)
        })
    }

    return (
        <div className="col-4">
            <div className="card shadow-lg mb-4">
                <i class="fa-solid fa-xmark delete" onClick={(e)=> removeFriends(e, user.email)}></i>
                <div className="card-img-top text-center pt-1" onClick={(e) => handleClick(e, user.id)}>
                    <img src={user.pic === "" ? UserImage : user.pic}
                    alt="Friend" className="img-fluid rounded-circle"/>
                </div>
                <div className="content text-center pt-4" onClick={(e) => handleClick(e, user.id)}>
                    <h3>{user.firstName} {user.lastName}</h3>
                </div>
            </div>
        </div>
    )
}

export default FriendsList;