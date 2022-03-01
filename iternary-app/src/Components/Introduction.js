import React, { useEffect, useState } from "react";
import session from "../session";

export function Introduction({users}){

    const [user, setUser] = useState({})

    useEffect(()=>{
        users.map(user =>{
            if(user.id == session.userID){
                setUser(user)
            }
        })
    }, [users])

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
    console.log(user)

    return( 
        <div className="top-content text-center pt-4">
            <h2>{determineTime()} {user.firstName}</h2>
            <blockquote>{user.quote}
                <cite> - {user.firstName} {user.lastName}</cite>
            </blockquote>
        </div>
    )
}

export default Introduction;