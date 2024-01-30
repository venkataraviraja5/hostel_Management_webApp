import React, { useState } from 'react'
import "./Auth.css"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate()

  const loginUser = async(e) => {
    e.preventDefault()
    const fetchUrl = await fetch("http://localhost:8080/login",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })

    if(fetchUrl.ok){
      const result = await fetchUrl.json()
      console.log(result.result)
      if(result.result === true){
        navigate("/home")
      }
    }
  }
  return (
    <div>
     <div className="form-container">
        <form className="input-group">
          <h2>Login</h2>
          <input type="text" placeholder="Enter Your Email" required 
           onChange={(e) => setEmail(e.target.value)}
          />
          <input type="text" placeholder="Password" required 
          onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={loginUser}>Login</button>
        </form>
        <p>Create New Account</p><Link to={"/signup"}>Signup</Link>
      </div>
    </div>
  )
}

export default Login
