import React from 'react'
import aboutpic1 from '../images/aboutpic1.jpg';
import aboutpic2 from '../images/aboutpic2.jpg';
import './about.css';


const About = () => {
  return (
    <div className='about-container'>
      <div className='left-container'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text.</p>
      </div>

      <div className='right-container'>
        <img className='pic1' src={aboutpic1} alt=''/>
        <img className='pic2' src= {aboutpic2} alt=''/>
      </div>
    </div>
  )
}

export default About
