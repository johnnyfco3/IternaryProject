import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import FriendsList from "../Components/FriendsList";
import session from "../session";

export function Friends({friends, users}){

    const [emails, setEmails] = useState([])
    
    useEffect(()=>{
        friends.map(friend => {
            if(friend.userID == session.userID){
                setEmails(friend.friends)
            }
        })
    }, [friends])

    const list = emails.map((email, i) => (
        users.map((user, i) =>{
            if(user.email === email){
                return <FriendsList user={user} key={i}/>
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
                    <form>
                        <div className="input-group my-5">
                            <span className="input-group-text" id="inputGroupPrepend"><i class="fa-solid fa-magnifying-glass"></i></span>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="inputGroupPrepend"/>
                        </div>
                    </form>

                    <section className="list mb-5 pb-5">
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