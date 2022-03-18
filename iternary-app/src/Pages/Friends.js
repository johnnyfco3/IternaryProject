import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import session from "../session";
import friends from "../models/friends";
import users from "../models/users";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import FriendsList from "../Components/FriendsList";
import AddFriend from "../Components/AddFriend";

export function Friends(){

    const [emails, setEmails] = useState([])
    
    useEffect(()=>{
        const friend = friends.find(friend => friend.userID === session.userID)
        if(friend){
            setEmails(friend.friends)
        }
    }, [])

    let navigate = useNavigate();
    
    function handleClick(e, id){
        e.preventDefault();
        navigate(`/history/${id}`)
    }

    const list = emails.map((email) => (
        users.map((user, i) =>{
            if(user.email === email){
                return <FriendsList user={user} handleClick={handleClick}/>
            }
        })
    ))

    return (
        <div id="friends">
            <header>
                <Navbar />
            </header>

            <main>
                <div className="container">
                    <AddFriend setEmails={setEmails}/>
                    <section className="list mb-5 pb-5 row">
                        {list}
                    </section>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Friends;