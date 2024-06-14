import React from 'react';
// import {Link} from 'react-router-dom';
import '../components/hero.css';
import herosecpic from '../icons_assets/herosecpic.jpg';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et auctor odio. Aenean ac lacinia felis, quis tempus elit. Morbi pellentesque vel orci vitae blandit. Donec odio erat, scelerisque at consectetur eu, volutpat a massa.</p>
        <button className='btn'>Reserve a Table</button> 
      </div>
      <img src={herosecpic} alt='' className='heropic'/>
    </div>
  )
}

export default Hero
