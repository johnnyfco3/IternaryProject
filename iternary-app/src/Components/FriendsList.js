import React from "react";

export function FriendsList({user, handleClick}){
    return (
        <div className="col-4">
            <div className="card shadow-lg mb-4" onClick={(e) => handleClick(e, user.id)}>
                <div className="card-content d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-user pe-4 icon"></i>
                    <h3>{user.firstName} {user.lastName}</h3>
                </div>
            </div>
        </div>
    )
}

export default FriendsList;