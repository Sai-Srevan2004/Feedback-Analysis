import React, { useState } from 'react';
import axios from 'axios';

const OtpSubmit = ({ data,setOtpCard,setShowSignup,setShowLogin}) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/api/users/signup', {
        ...data,  // Spread the data object so that its fields are sent individually
        otp       // Add OTP to the request body
      });
      console.log('OTP verification successful:', response.data);
      setOtpCard(false)
      setShowSignup(false)
      setShowLogin(false)
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', minHeight: '300px', gap: '20px' }}>
      <h1>Please Verify Your Email</h1>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        style={{ padding: '10px', fontSize: '16px', marginBottom: '20px', width: '200px', textAlign: 'center' }}
      />
      <button onClick={handleSubmit} style={{ backgroundColor: 'aqua', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Submit OTP
      </button>
    </div>
  );
};

export default OtpSubmit;
