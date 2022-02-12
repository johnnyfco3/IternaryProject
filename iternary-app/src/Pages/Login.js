import React from "react";

export function Login(){

    return (
        <div id="login">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="title text-center">
                            <h5 className="card-title p-2 pb-4">Sign In</h5>
                        </div>
                        <form>
                            <div class="mb-4 field">
                                <label for="email" class="form-label">Email address</label>
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="email" class="form-control" id="email" aria-describedby="inputGroupPrepend" required />
                                </div>
                            </div>
                            <div class="mb-4 field">
                                <label for="password" class="form-label">Password</label>
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="password" class="form-control" id="password" aria-describedby="inputGroupPrepend" required />
                                </div>
                            </div>
                            <div className="submit">
                                <button type="submit" class="btn px-4 mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;