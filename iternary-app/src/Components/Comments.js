import React, { useEffect, useState } from "react";
import users from "../models/users";

export function Comments({comment}){

    const [user, setUser] = useState({})

    useEffect(() =>{
        users.map(user =>{
            if(user.id === comment.user){
                setUser(user)
            }
        })
    }, [comment])

    return (
        <p>
            {user.firstName} {user.lastName} - <br />
            {comment.text}
        </p>
    )
}

export default Comments;