import React, { useEffect, useState } from 'react'
import "./Auth.css"
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[user,setUser] = useState({})
  const[cookie,setCookie] = useState('')
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
      //console.log(result.user)
      setUser(result.user)
      if(result.result === true){
        Cookies.set("cookie",JSON.stringify(result.user),{expires:1})
        navigate("/home/" + result.user._id)
      }
    }
  }

  const logout = () =>{
    Cookies.remove("cookie")
    setCookie('')
  }

  useEffect(() => {
   let getCookie = Cookies.get("cookie")
   if(getCookie){
    const parseCookie = JSON.parse(getCookie)
    setCookie(parseCookie)
   }
   console.log("cookie")
  },[Cookies.get("cookie")])

  return (
    <div>
     <div className="form-container">
      {
        cookie?
        <div>
          <button onClick={logout}>Logout</button>
        </div>
        :
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
      }
        <p>Create New Account</p><Link to={"/signup"}>Signup</Link>
      </div>
    </div>
  )
}

export default Login
