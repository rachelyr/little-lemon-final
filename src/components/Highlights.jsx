import React from 'react'
import './highlights.css';
import Card from '../components/card'


const fooditems = [
  {
    title: "Greek Salad",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/salad.jpg"),
  },
  {
    title: "Bruchetta",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/fooditem2.jpg"),
  },
  {
    title: "Lemon Dessert",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/lemondessert1.png"),
  },
];

const Highlights = () => {
  return (
    <div className= 'highlights '>
      <div className='head'>
        <h1>This weeks Specials!</h1>
        <button className='btn'>Online Menu</button>
      </div>

        <div className='card-component'>
        {fooditems.map((fooditems) => (  //mapping out all the cards
          <Card
            key={fooditems.title}
            title={fooditems.title}
            description={fooditems.description}
            imageSrc={fooditems.getImageSrc()}
          />
        ))}
        </div>
    </div>
  )
}

export default Highlights
