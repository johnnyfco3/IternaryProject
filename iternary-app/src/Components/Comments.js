import React, { useEffect, useState } from "react";
import session from "../service/session";
import UserImage from "../Images/blank-profile-picture-gdf604cfb6_1280.png"
import { getById } from "../service/users";

export function Comments({comment, email, removeComment}) {

    const [user, setUser] = useState({})

    useEffect(() =>{
        const fetchData = async () => {
            const user = await getById(comment.userID)
            setUser(user.data)
        }
        fetchData()
    }, [comment])

    return (
        <>
        {email === session.user.email ? ( 
            <i className="fa-solid fa-xmark delete" onClick={(e)=> removeComment(e, comment.commentID)}></i>
            ) : (
                <></>
        )}
        <p>
            <img src={user.profilePic === "" ? UserImage : user.profilePic} alt="Profile Pic" className="img-fluid rounded-circle pe-2"/> {user.firstName} {user.lastName} - <br />
            {comment.text}
        </p>
        </>
    )
}

export default Comments;