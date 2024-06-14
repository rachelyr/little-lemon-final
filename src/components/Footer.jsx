import React from 'react';
import './footer.css';
import lillogo from '../icons_assets/lillogo.jpg';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <img src={lillogo} alt=''/>
        <div className='doormat'>
          <h2>Doormat</h2>
          <ul>
            <li>Navigation</li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <ul>
            <li>Address</li>
            <li>Phone no.</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="social-media">
          <h2>Social Media</h2>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
