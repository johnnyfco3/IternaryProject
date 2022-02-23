import React from "react";

export function FriendsList({user}){
    return (
        <div className="card shadow-lg mb-4">
            <div className="card-content d-flex justify-content-between align-items-center">
                <div className="left d-flex">
                    <i className="fa-solid fa-user pe-4 icon"></i>
                    <h3>{user.firstName} {user.lastName}</h3>
                </div>
                <div className="right d-flex">
                    <i className="fa-solid fa-eye icon pe-4"></i>
                    <i className="fa-solid fa-trash-can icon"></i>
                </div>
            </div>
        </div>
    )
}

export default FriendsList;