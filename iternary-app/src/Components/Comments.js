import React, { useEffect, useState } from "react";
import users from "../models/users";
import session from "../session";

export function Comments({comment, id, index, removeComment}) {

    const [user, setUser] = useState({})

    useEffect(() =>{
        const user = users.find(user => user.id === comment.user)  
        setUser(user)
    }, [comment])

    return (
        <>
        {parseInt(id) === session.userID ? ( 
            <i class="fa-solid fa-xmark delete" onClick={(e)=> removeComment(e, index, comment.id)}></i>
            ) : (
                <></>
        )}
        <p>
            {user.firstName} {user.lastName} - <br />
            {comment.text}
        </p>
        </>
    )
}

export default Comments;