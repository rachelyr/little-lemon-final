import { Heading, HStack, Text,} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './card.css';

const Card = ({ title, description, imageSrc }) => {

  return(
    <div className='card-container'>
        <div className='image-container' >
            <img src={imageSrc} alt=""></img>
        </div>

            <div className="card-content">
                <div className="card-title">
                    <Heading>{title}</Heading>
                </div>
            <div className="card-body">
                <Text>{description}</Text>
            </div>
            <HStack>
                <p>Order for Delivery</p>
                <FontAwesomeIcon icon={faArrowRight} size='1x'/>
            </HStack>
        </div>
    </div>
  )
};

export default Card;