import React from 'react'
import "./Auth.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
     <div className="form-container">
        <form className="input-group">
          <h2>Login</h2>
          <input type="text" placeholder="Enter Your Email" required />
          <input type="text" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Create New Account</p><Link to={"/signup"}>Signup</Link>
      </div>
    </div>
  )
}

export default Login
