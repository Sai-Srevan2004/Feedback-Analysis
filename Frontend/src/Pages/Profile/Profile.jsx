import React, { useEffect, useState } from 'react';
import './Profile.css'; // Import CSS for styling
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../Slices/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast'; // Import toast for notifications

const Profile = () => {
  const token = useSelector((state) => state.auth.token); // Get token from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [userDetails, setUserDetails] = useState(null); // State to store user details
  const [loading, setLoading] = useState(true); // State to handle loading

  // Fetch user profile details from backend API
  useEffect(() => {
    const fetchUserDetails = async () => {
      const storedToken = token || localStorage.getItem('token'); // Use token from Redux or localStorage

      if (!storedToken) {
        return navigate('/'); // Redirect to login if token is not found
        
      }

      try {
        const response = await axios.get('http://localhost:7000/api/users/profile', {
          headers: {
            Authorization:`Bearer ${storedToken}`, // Pass token in Authorization header
          },
        });
        setUserDetails(response.data.userDetails); // Set the user data from API
        console.log(response.data)
        setLoading(false); // Turn off loading
      } catch (error) {
        console.error('Error fetching user details:', error);
        toast.error('Failed to fetch user details.');
        setLoading(false); // Turn off loading in case of error
        navigate('/'); // Redirect to login page on failure
      }
    };

    fetchUserDetails();
  }, [token, navigate]);

  // Handle logout
  const handleLogout = () => {
    dispatch(Logout()); // Call the logout action
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/'); // Redirect to home page
  };

  // If the data is still loading, show a loading indicator
  if (loading) {
    return <p>Loading profile...</p>;
  }

  // If user details are not available, return null or an error message
  if (!userDetails) {
    return <p>Profile data not available.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={userDetails.image}
          alt="Profile"
          className="profile-image"
        />
        <h1>{userDetails.name}</h1>
      </div>
      <div className="profile-info">
        <div className="profile-first">
          <div className="profile-section">
            <h2>Basic Information</h2>
            <p>Email: {userDetails.email}</p>
            <p>Your Role: {userDetails.role}</p>
          </div>
          <div className="profile-section">
            <h2>Feedback Stats</h2>
            <p>Total Feedbacks generated: {userDetails.reviews.length}</p>
            <p>Positive Feedback: {userDetails.positiveFeedbackPercentage || 0}%</p>
          </div>
        </div>
        <div className="profile-section">
          <button onClick={handleLogout}>Logout</button> {/* Logout Button */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
