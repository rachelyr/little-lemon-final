import React from 'react'
import smalllogo from '../images/smalllogo.jpg';
import '../components/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={smalllogo} alt="" className='logo'/>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
