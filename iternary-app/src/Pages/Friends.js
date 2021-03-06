import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import session from "../service/session";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import FriendsList from "../Components/FriendsList";
import AddFriend from "../Components/AddFriend";
import Introduction from "../Components/Introduction";
import { getByUser } from "../service/friends";
import { getUsers } from "../service/users";

export function Friends(){

    const [ids, setIds] = useState([])
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        const fetchData = async () => {
            const data = await getByUser(session.user.userID)
            setIds(data.data.map(friend => friend.newFriend))
            const userData = await getUsers()
            setUsers(userData.data)
        }
        fetchData()
    }, [])

    let navigate = useNavigate();
    
    function handleClick(e, email){
        e.preventDefault();
        navigate(`/history/${email}`)
    }

    const list = ids.map((id) => (
        users.map((user, i) =>{
            if(user.userID === id){
                return <FriendsList user={user} handleClick={handleClick} setIds={setIds} key={i}/>
            }
        })
    ))

    return (
        <div id="friends">
            <header>
                <Navbar />
            </header>
            
            <section className="hero">
                    <img src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Hero"/>
                    <Introduction email={session.user.email}/>
            </section>

            <main>
                <div className="container">
                    <AddFriend setIds={setIds}/>
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