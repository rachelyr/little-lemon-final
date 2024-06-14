import React from 'react'
import smalllogo from '../images/smalllogo.jpg';
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={smalllogo} alt="" className='logo'/>

      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href=''>About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
