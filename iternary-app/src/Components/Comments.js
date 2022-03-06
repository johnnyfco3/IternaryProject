import React, { useEffect, useState } from "react";

export function Comments({comment, users}){

    const [user, setUser] = useState({})

    useEffect(() =>{
        users.map(user =>{
            if(user.id === comment.user){
                setUser(user)
            }
        })
    }, [comment, users])

    return (
        <p>
            {user.firstName} {user.lastName} - <br />
            {comment.text}
        </p>
    )
}

export default Comments;