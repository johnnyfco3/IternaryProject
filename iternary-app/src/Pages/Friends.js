import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import FriendsList from "../Components/FriendsList";
import AddFriend from "../Components/AddFriend";
import session from "../session";
import { useNavigate } from "react-router-dom";

export function Friends({friends, users}){

    const [emails, setEmails] = useState([])
    
    useEffect(()=>{
        friends.map(friend => {
            if(friend.userID === session.userID){
                setEmails(friend.friends)
            }
        })
    }, [friends])

    let navigate = useNavigate();
    
    function handleClick(e, id){
        e.preventDefault();
        navigate(`/history/${id}`)
    }

    const list = emails.map((email, i) => (
        users.map((user, i) =>{
            if(user.email === email){
                return <FriendsList user={user} key={i} handleClick={handleClick}/>
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
                    <AddFriend users={users} setEmails={setEmails}/>
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