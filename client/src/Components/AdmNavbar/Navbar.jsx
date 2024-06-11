import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/nav-logo.svg'
import navprofileIcon from '../Assets/nav-profile.svg'
import { Link } from 'react-router-dom'
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/"><img src={logo} alt="" width={55}/></Link>
      <Link to='/adminPanel' className='nav-link'><img src={navlogo} className='nav-logo' alt="" />
      </Link>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
