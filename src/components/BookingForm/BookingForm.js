import React, { useState, useEffect } from 'react';
import './bookingForm.css'
import interior from '../../images/restaurant-interior.jpg'
import { Link } from 'react-router-dom';


const BookingForm = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#495E57';
    return () => {
      document.body.style.backgroundColor = '#495E57';
    };
  }, []);


  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  // const [partySize, setPartySize] = useState(1);
  // const [specialRequests, setSpecialRequests] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Reservation submitted:', {
      name,
      // email,
      phone,
      date,
      time,
      // partySize,
      // specialRequests,
    });
    // Add API call or logic to submit the reservation to the restaurant's system
  };


  return (
    <div className="main">
    <div className="container">
        <div className="booking-content">
          <div className="booking-image">
            <img src={interior} className='booking-img' alt='Booking-form-img'/>
          </div>
        <div className="booking-form">


      <form onSubmit={handleSubmit} id='booking-form'>
        <h2>Table Reservation</h2>

        <div className='form-group form-input'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input type="text" value={name} id='name' onChange={(event) => setName(event.target.value)}/>

        <br />
        </div>

        <div className="form-group">
          <label htmlFor='phone-no' className='form-label'>Phone no.</label>
          <input type="tel" id='phone' value={phone} onChange={(event) => setPhone(event.target.value)} />

        <br />
        </div>

        <div className="form-group">
          <label htmlFor='date' className='form-label'>Date</label>
          <input type="date" id='date' value={date} onChange={(event) => setDate(event.target.value)} />

        <br />
        </div>

        <div className="form-group">
          <label htmlFor='time' className='form-label'>Time</label>
          <input type="time" id='time' value={time} onChange={(event) => setTime(event.target.value)} />

        <br />
        </div>

        <div className="form-radio">
          <label className='label-radio'>Select your Dining Space</label>
          <div className="radio-item-list">
            <span className='radio-item'>
              <input type="radio" name='number_people' placeholder='2' id='number_people_2' />
              <label htmlFor="number_people_2">2</label>
            </span>
            <span className='radio-item active'>
              <input type="radio" name='number_people' placeholder='4' id='number_people_4'/>
              <label htmlFor="number_people_4">4</label>
            </span>
            <span className='radio-item'>
              <input type="radio" name='number_people' placeholder='6' id='number_people_6' />
              <label htmlFor="number_people_6">6</label>
            </span>
            <span className='radio-item'>
              <input type="radio" name='number_people' placeholder='8' id='number_people_8' />
              <label htmlFor="number_people_8">8</label>
            </span>
          </div>
        </div>

        <br />

        <div className="form_submit">
          <input type="submit" placeholder='Book Now' className='submit' id='submit' name='submit' />
          <Link  className='verify_booking'>Verify your booking info from your mail</Link>
        </div>
      </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default BookingForm;
