import React from 'react';
import { Link} from 'react-router-dom';
import '../Hero/hero.css'
import herosecpic from '../../icons_assets/herosecpic.jpg'; //this is imported from two folders back

const Hero = () => {

  // const navigate = useNavigate();

  // const handleButtonClick = () => {
  //   navigate('BookingForm', { replace: true });
  // };

  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et auctor odio. Aenean ac lacinia felis, quis tempus elit. Morbi pellentesque vel orci vitae blandit. Donec odio erat, scelerisque at consectetur eu, volutpat a massa.</p>

        <Link to='BookingForm'><button className='btn'>Reserve a Table
        </button></Link>

      </div>
      <img src={herosecpic} alt='' className='heropic'/>
    </div>
  )
}

export default Hero
