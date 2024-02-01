import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar_home'> 
      <div>
        <Link to={"/"}><p>Login</p></Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar
