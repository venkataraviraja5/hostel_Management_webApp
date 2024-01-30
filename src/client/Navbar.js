import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar_home'> 
      <h1>Navbar</h1>
      <Outlet />
    </div>
  )
}

export default Navbar
