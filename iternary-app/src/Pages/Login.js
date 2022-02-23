import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import session from "../session";

export function Login({users}){

    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

    function handleChange(event){
        setLogin(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    let navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        let hasAccount = false;
        users.map(user => {
            if(user.email === login.email && user.password === login.password){
                hasAccount = true
                session.Login(user.id)
                return hasAccount
            }
        })
        if(hasAccount){
            setLogin({
                email: "",
                password: ""
            })
            navigate(`/history`)
        }
        else{
            alert("Account not found")
        }
    }

    return (
        <div id="login">
            <div className="container">
                <main>
                    <div className="card">
                        <div className="card-body">
                            <div className="title text-center">
                                <h5 className="card-title p-2 pb-4">Sign In</h5>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4 field">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fa-solid fa-envelope"></i></span>
                                        <input type="email" className="form-control" id="email" name="email" aria-describedby="inputGroupPrepend" value={login.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="mb-4 field">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fa-solid fa-lock"></i></span>
                                        <input type="password" className="form-control" id="password" name="password" aria-describedby="inputGroupPrepend" value={login.password} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="submit">
                                    <button type="submit" className="btn px-4 mt-3">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="bottom-content pt-5">
                        <h6 className="pe-3">Don't have an account?</h6>
                        <Link to="/register">Register</Link>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Login;