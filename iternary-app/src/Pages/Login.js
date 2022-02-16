import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Login(){

    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

    function handleSubmit(e){
        e.preventDefault();
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
                                <div class="mb-4 field">
                                    <label for="email" class="form-label">Email address</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="inputGroupPrepend"><i class="fa-solid fa-envelope"></i></span>
                                        <input type="email" class="form-control" id="email" aria-describedby="inputGroupPrepend" value={login.email} onChange={(event)=> setLogin(event.target.value)} required />
                                    </div>
                                </div>
                                <div class="mb-4 field">
                                    <label for="password" class="form-label">Password</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="inputGroupPrepend"><i class="fa-solid fa-lock"></i></span>
                                        <input type="password" class="form-control" id="password" aria-describedby="inputGroupPrepend" value={login.password} onChange={(event)=> setLogin(event.target.value)} required />
                                    </div>
                                </div>
                                <div className="submit">
                                    <button type="submit" class="btn px-4 mt-3">Sign In</button>
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