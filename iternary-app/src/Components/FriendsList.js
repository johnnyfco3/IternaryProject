import React from "react";
import { Link } from "react-router-dom";

export function FriendsList({user}){
    return (
        <div className="col-4">
            <Link to={""} style={{textDecoration: "none"}}><div className="card shadow-lg mb-4">
                <div className="card-content d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-user pe-4 icon"></i>
                        <h3>{user.firstName} {user.lastName}</h3>
                </div>
            </div></Link>
        </div>
    )
}

export default FriendsList;