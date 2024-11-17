


import React, { useEffect, useState } from 'react';
import './Profile.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast'; // Import toast for notifications

const Profile = () => {
  
  const navigate = useNavigate();
  
  const [userDetails, setUserDetails] = useState(null); // State to store user details
  const [loading, setLoading] = useState(true); // State to handle loading
  const storedToken =  JSON.parse(localStorage.getItem('token')); // Use token from Redux or localStorage


  // Fetch user profile details from backend API
  useEffect(() => {
    const fetchUserDetails = async () => {

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
  }, [storedToken, navigate]);

  

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
      <img className="profile-image" src={userDetails.image} alt={`${userDetails.username}'s profile`} />
      <h2 className="profile-username">{userDetails.username}</h2>
      <div className="profile-details">
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Role:</strong> {userDetails.role}</p>
        <p><strong>Date Joined:</strong> {userDetails.createdAt.split('T')[0].split('-').reverse().join('-')}</p>
      </div>
    </div>
  );
};

export default Profile;
