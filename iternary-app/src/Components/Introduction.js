import React, { useEffect, useState } from "react";
import session from "../service/session";
import users from "../models/users";

export function Introduction({id}){

    const [user, setUser] = useState({})

    useEffect(()=>{
        const u = users.find(u=> u.id === parseInt(id))
        if(u){
            setUser(u)
        }
    }, [id])

    const today = new Date()
    const hour = today.getHours()

    function determineTime(){
        if(hour < 12 && hour > 2){
            return "Good Morning"
        }
        else if(hour > 12 && hour < 19){
            return "Good Afternoon"
        }
        else{
            return "Good Night"
        }
    }

    return( 
        <>
            <div className="top-content text-center pt-4">
                {parseInt(id) === session.userID ? (
                    <>
                    <h2>{determineTime()} {user.firstName}</h2>
                    <blockquote>{user.quote}
                        <cite> - {user.firstName} {user.lastName}</cite>
                    </blockquote>
                    </> ) : (
                    <>
                    <h2>Welcome to {user.firstName} {user.lastName}'s Page</h2>
                    <blockquote>{user.quote}
                        <cite> - {user.firstName} {user.lastName}</cite>
                    </blockquote>
                    </>
                    )
                }
            </div>
        </>
    )
}

export default Introduction;