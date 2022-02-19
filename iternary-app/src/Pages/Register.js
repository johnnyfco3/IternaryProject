import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register(){

    const [users, setUsers] = useState([
        { 
            firstName: "Johnny", 
            lastName: "Tejada", 
            birthday: "07-03-2000", 
            email: "example@gmail.com", 
            password: "12345", 
            quote: "Let's make today a memorable one"
        },
    ])

    const [confirm, setConfirm] = useState("")

    const [newUser, setNewUsers] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
        email: "",
        password: "",
        quote: ""
    })

    function handleConfirm(event){
        setConfirm(event.target.value)
    }

    function handleChange(event){
        setNewUsers(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    
    let navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        if(confirm === newUser.password){
            users.push(newUser)
            setNewUsers({
                firstName: "",
                lastName: "",
                birthday: "",
                email: "",
                password: "",
                quote: ""
            })
            navigate("/history")
        }
        else{
            alert("Passwords do not match!")
        }
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
                            <form className="row" onSubmit={handleSubmit}>
                                <div className="col-md-6 pe-5">
                                    <label htmlFor="fname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="fname" name="firstName" value={newUser.firstName} onChange={handleChange} required/>
                                </div>
                                <div className="col-md-6 ps-5 last">
                                    <label htmlFor="lname" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lname" name="lastName" value={newUser.lastName} onChange={handleChange} required/>
                                </div>
                                <div className="col-md-6 pe-5">
                                    <label htmlFor="birthday" className="form-label">Date of birth</label>
                                    <input type="date" className="form-control" id="birthday" name="birthday" value={newUser.birthday} onChange={handleChange} required/>
                                </div>
                                <div className="col-6 ps-5 email">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" placeholder="example@gmail.com" name="email" value={newUser.email} onChange={handleChange} required/>
                                </div>
                                <div className="col-6 pe-5">
                                    <label htmlFor="password" className="form-label">Create Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={newUser.password} onChange={handleChange} required/>
                                </div>
                                <div className="col-md-8 ">
                                    <label htmlFor="confirm" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirm" name="confirm" value={confirm} onChange={handleConfirm} required/>
                                </div>
                                <div className="col-md-8 ">
                                    <label htmlFor="quote" className="form-label">Create a Quote for your Page</label>
                                    <input type="text" className="form-control" id="quote" name="quote" value={newUser.quote} onChange={handleChange} required/>
                                </div>
                                <div className="col-12 text-center pt-5">
                                    <button type="submit" className="btn px-4">Get Started</button>
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