import React, { useEffect, useState } from "react";
import users from "../models/users";
import session from "../service/session";
import UserImage from "../Images/blank-profile-picture-gdf604cfb6_1280.png"

export function Comments({comment, email, index, removeComment}) {

    const [user, setUser] = useState({})

    useEffect(() =>{
        const user = users.find(user => user.email === email)  
        setUser(user)
    }, [email])

    return (
        <>
        {email === session.user.email ? ( 
            <i class="fa-solid fa-xmark delete" onClick={(e)=> removeComment(e, index, comment.id)}></i>
            ) : (
                <></>
        )}
        <p>
            <img src={user.pic === "" ? UserImage : user.pic} alt="Profile Pic" className="img-fluid rounded-circle pe-2"/> {user.firstName} {user.lastName} - <br />
            {comment.text}
        </p>
        </>
    )
}

export default Comments;