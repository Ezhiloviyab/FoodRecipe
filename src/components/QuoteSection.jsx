import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './quoat.css';

export default function QouteSection() {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    date: '',
    memberCount: '',
  });

  const [isTableBooked, setIsTableBooked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBookTable = () => {
   
    setIsTableBooked(true);
    console.log('Table Booked:', bookingData);
  };

  return (
    <div className="section quote">
      <p className="qoute-text">
        <FontAwesomeIcon icon={faQuoteLeft} /> Food is everything we are. It's an
        extension of nationalist feeling, ethnic feeling, your personal history,
        your province, your region, your tribe, your grandma. It's inseparable
        from those from the get-go.
      </p>
      <p className="qoute-auther">- Anthony Bourdain</p>

    <div className='row'>
        <h4>Book a Table</h4>
    <div className="col">
        <img src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height:"300px",width:"300px"}}/>
        </div>
        <div className='col'>
      <div className="booking-form">
        <div className='form'>
        <label className='form-lable'>Name:</label>
        <input
          type="text"
          name="name"
          className='form-control'
          value={bookingData.name}
          onChange={handleInputChange}
        />

        <label className='form-lable'>Email:</label>
        <input
          type="email"
          name="email"
          className='form-control'
          value={bookingData.email}
          onChange={handleInputChange}
        />

        <label className='form-lable'>Date:</label>
        <input
          type="date"
          name="date"
          className='form-control'
          value={bookingData.date}
          onChange={handleInputChange}
        />

        <label className='form-lable'>Member Count:</label>
        <input
          type="number"
          name="memberCount"
          className='form-control'
          value={bookingData.memberCount}
          onChange={handleInputChange}
        />

      
        <button   className='btn' onClick={handleBookTable}>Book Table</button>
        </div>
      </div>
      </div> 
</div>
      
      {isTableBooked && (
        <div className="table-booked-message">
          <p className='booktext'>Table Booked! Thank you for your reservation.</p>
        </div>
      )}
     
    </div>
  );
}
