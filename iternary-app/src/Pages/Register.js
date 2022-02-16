import React, { useState } from "react";

export function Register(){

    const [users, setUsers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: "",
        quote: ""
    })

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div id="register">
            <div className="container">
                <main>
                    <div className="card">
                        <div className="card-body">
                            <div className="title text-center">
                                <h5 className="card-title p-2 pb-4">Register</h5>
                            </div>
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-6 pe-5">
                                    <label for="fname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="fname" value={users.firstName} onChange={(event)=> setUsers(event.target.value)} required/>
                                </div>
                                <div class="col-md-6 ps-5">
                                    <label for="lname" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="lname" value={users.lastName} onChange={(event)=> setUsers(event.target.value)} required/>
                                </div>
                                <div class="col-6 pe-5">
                                    <label for="email" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="email" placeholder="example@gmail.com" value={users.email} onChange={(event)=> setUsers(event.target.value)} required/>
                                </div>
                                <div class="col-6 ps-5">
                                    <label for="password" class="form-label">Create Password</label>
                                    <input type="password" class="form-control" id="password" value={users.password} onChange={(event)=> setUsers(event.target.value)} required/>
                                </div>
                                <div class="col-md-8 ">
                                    <label for="confirm" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" id="confirm" value={users.confirm} onChange={(event)=> setUsers(event.target.value)} required/>
                                </div>
                                <div class="col-md-8 ">
                                    <label for="quote" class="form-label">Create a Quote for your Page</label>
                                    <input type="text" class="form-control" id="quote" value={users.quote} onChange={(event)=> setUsers(event.target.value)} required/>
                                </div>
                                <div class="col-12 text-center pt-5">
                                    <button type="submit" class="btn px-4">Get Started</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Register;