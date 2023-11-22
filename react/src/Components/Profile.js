// Profile.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');

  return (
    <div>
       <Navbar />
      <h2>Profile Page</h2>
      <div>
        <label>Name:</label>
        <p>{name}</p>
      </div>
      <div>
        <label>Phone Number:</label>
        <p>{phoneNumber}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
