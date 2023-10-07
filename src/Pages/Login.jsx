import React from 'react'

const Login = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h1>Login Your Account</h1>
                    <p>Login your Account and start exploring the Auction Fresh System</p>
                </div>
                <div className="col">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login