import React from 'react'
import pfp1 from '../images/pfp1.jpg';
import pfp2 from '../images/pfp2.jpg';
import pfp3 from '../images/pfp3.jpg';
import pfp4 from '../images/pfp4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import './testimonials.css'
import {HStack} from "@chakra-ui/react";


const Testimonials = () => {
  return (
    <div className='testimonial container'>
        <h1> Testimonials</h1>
      <div className='box'>
            <div className='profile'>
                <h3>Rating</h3>
                <img src={pfp1} alt=""/><p>Great Dining experience</p>
                <HStack>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} />
                </HStack>
            </div>
        <div className='profile'>
            <h3>Rating</h3>
                <img src={pfp2} alt=""/><p>Good customer service</p>
                <HStack>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} />
                </HStack>
        </div>
        <div className='profile'>
            <h3>Rating</h3>
            <img src={pfp3} alt=""/><p>Great Dining experience</p>
            <HStack>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} />
            </HStack>
        </div>
        <div className='profile'>
            <h3>Rating</h3>
            <img src={pfp4} alt=''/><p>Loved the food</p>
            <HStack>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} color='yellow'/>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </HStack>
        </div>
        </div>
      </div>
  )
}

export default Testimonials
