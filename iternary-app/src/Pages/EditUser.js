import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import session from "../service/session";
import { getByEmail, removeUser, updateUser } from "../service/users";

export function EditUsers(){

    let navigate = useNavigate()

    const [editUser, setEditUser] = useState({
        userID: session.user.userID,
        firstName: session.user.firstName,
        lastName: session.user.lastName,
        birthday: session.user.birthday,
        email: session.user.email,
        password: session.user.password,
        quote: session.user.quote,
        pic: session.user.profilePic
    })
    const [newPassword, setNewPassword] = useState({
        newPassword: '',
        confirmPassword: '',
        userID: session.user.userID,
        firstName: session.user.firstName,
        lastName: session.user.lastName,
        birthday: session.user.birthday,
        email: session.user.email,
        password: session.user.password,
        quote: session.user.quote,
        pic: session.user.profilePic
    })
    const [passwordForm, setPasswordForm] = useState(false)

    function togglePasswordForm(){
        setPasswordForm(!passwordForm)
    }

    function handleChange(event){
        setEditUser({ 
            ...editUser, 
            [event.target.name]: event.target.value 
        })
    }

    async function handleSubmit(event){
        event.preventDefault()
        if(editUser.email !== session.user.email){
            const checkUser = await getByEmail(editUser.email)
            if(Object.keys(checkUser).length === 0){
                try{
                    await updateUser(session.user.id, editUser)
                    localStorage.setItem('user', JSON.stringify(editUser))
                    session.user = JSON.parse(localStorage.getItem('user'))
                    navigate("/home")
                } catch(err){
                    console.log(err)
                }
            }
            else{
                throw { statusCode: 400, message: 'User already exists' }
            }
        }
        else{
            try{
                await updateUser(session.user.userID, editUser)
                localStorage.setItem('user', JSON.stringify(editUser))
                session.user = JSON.parse(localStorage.getItem('user'))
                navigate("/home")
            } catch(err){
                console.log(err)
            }
        }
    }

    async function deleteAccount(){
        if(window.confirm('Are you sure you want to delete your account?')){
            try{
                await removeUser(session.user.userID)
                session.Logout()
                navigate("/")
            } catch(err){
                console.log(err)
            }
        }
    }

    function handlePasswordChange(event){
        setNewPassword({ 
            ...newPassword, 
            [event.target.name]: event.target.value 
        })
    }

    async function handlePasswordSubmit(event){
        event.preventDefault()
        if(newPassword.newPassword === newPassword.confirmPassword){
            try{
                await updateUser(session.user.userID, { 
                    userID: newPassword.userID,
                    firstName: newPassword.firstName,
                    lastName: newPassword.lastName,
                    birthday: newPassword.birthday,
                    email: newPassword.email,
                    quote: newPassword.quote,
                    pic: newPassword.profilePic,
                    password: newPassword.newPassword
                 })
                navigate("/home")
            } catch(err){
                console.log(err)
            }
        }
        else{
            throw { statusCode: 400, message: 'Passwords do not match' }
        }
    }


    return(
        <div id="edit-user">
            <header>
                <Navbar />
            </header>

            <div className="container">
                <main className="card p-4 mt-3">
                    <div className="top-content mt-4 text-center">
                        <h1 className="title">User Information</h1>
                    </div>
                    <form className="my-1" onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <h1 className="heading">First Name</h1>
                                <input type="text" className="form-control" id="fname" name="firstName" value={editUser.firstName} onChange={handleChange}/>
                            </div>
                            <div className="col-md-6">
                                <h1 className="heading">Last Name</h1>
                                <input type="text" className="form-control" id="lname" name="lastName" value={editUser.lastName} onChange={handleChange}/>
                            </div>
                            <div className="col-md-6">
                                <h1 className="heading">Email</h1>
                                <input type="email" className="form-control" id="email" name="email" value={editUser.email} onChange={handleChange}/>
                            </div>
                            <div className="col-md-4">
                                <h1 className="heading">Birthday</h1>
                                <input type="text" className="form-control" id="dob" name="birthday" value={editUser.birthday} onChange={handleChange}/>
                            </div>
                            <div className="col-md-8">
                                <h1 className="heading">Profile Pic</h1>
                                <input type="text" className="form-control" id="pic" name="profilePic" value={editUser.pic} onChange={handleChange}/>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Quote</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="quote" value={editUser.quote} onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <div className="col-12 text-center button">
                            <button type="submit" className="btn px-4">Save Changes</button>
                        </div>
                    </form>

                    <div className="buttons text-center pt-5">
                        <button className="btn btn-danger px-4" onClick={deleteAccount}>Delete Account</button>
                        <button className="btn btn-warning px-4 ms-3" onClick={togglePasswordForm}>Change Password</button>
                    </div>

                    {passwordForm ? (
                        <form className="my-5 mx-5" onSubmit={handlePasswordSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <h1 className="heading">New Password</h1>
                                    <input type="password" className="form-control" id="new" name="newPassword" value={newPassword.newPassword} onChange={handlePasswordChange}/>
                                </div>
                                <div className="col-md-6">
                                    <h1 className="heading">Confirm Password</h1>
                                    <input type="password" className="form-control" id="confirm" name="confirmPassword" value={newPassword.confirmPassword} onChange={handlePasswordChange}/>
                                </div>
                            </div>
                            <div className="col-12 text-center button">
                                <button type="submit" className="btn px-4">Save</button>
                            </div>
                        </form> ) : (
                            <></>
                        )}
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default EditUsers;