import React from "react";
import UserImage from "../Images/blank-profile-picture-gdf604cfb6_1280.png"

export function FriendsList({user, handleClick}){
    return (
        <div className="col-4">
            <div className="card shadow-lg mb-4" onClick={(e) => handleClick(e, user.id)}>
            <div className="card-img-top text-center pt-1">
                <img src={user.pic === "" ? UserImage : user.pic}
                alt="Friend" className="img-fluid rounded-circle"/>
            </div>
                <div className="content text-center pt-4">
                    <h3>{user.firstName} {user.lastName}</h3>
                </div>
            </div>
        </div>
    )
}

export default FriendsList;