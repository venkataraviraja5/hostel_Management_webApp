import React from 'react'
import "./Auth.css"
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <div>
     <div className="form-container">
        <form className="input-group">
          <h2>Sign Up</h2>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
          <Link to={"/"}>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp
