import React, { useState } from 'react'
import "./Auth.css"
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate()
     
  const signupUser = async (e) => {
    e.preventDefault()
    const fetchUrl = await fetch("http://localhost:8080/signup",{
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
      console.log(result)
      if(result.result === true){
        navigate('/')
      }
    }
  }

  return (
    <div>
     <div className="form-container">
        <form className="input-group">
          <h2>Sign Up</h2>
          <input type="email" placeholder="Enter Your Email" name='' required onChange={(e) => setEmail(e.target.value)} 
          autoComplete='off'
          />
          <input type="text" placeholder="Password"  required onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" onClick={signupUser}>Sign Up</button>
          <p><Link to={"/"}>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
