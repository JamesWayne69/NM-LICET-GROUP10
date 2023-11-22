// SignOut.js
import React from 'react';
import Footer from './Footer';

const SignOut = () => {
  alert('You have been signed out.');
  return (
    <div>
      <h2>Sign Out Page</h2>
      <p>You have been signed out. Redirecting to the login page...</p>
      <Footer />
    </div>
  );
};

export default SignOut;
