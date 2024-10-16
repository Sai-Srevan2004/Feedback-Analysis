import React from 'react';
import './Profile.css'; // Import CSS for styling

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
        <h1>John Doe</h1>
      </div>
      <div className="profile-info">
        <div className="profile-section">
          <h2>Basic Information</h2>
          <p>Email: johndoe@example.com</p>
          <p>Joined: January 2023</p>
        </div>
        <div className="profile-section">
          <h2>Feedback Stats</h2>
          <p>Total Feedback Given: 120</p>
          <p>Positive Feedback: 80%</p>
        </div>
        <div className="profile-section">
          <h2>Account Settings</h2>
          <button>Edit Profile</button>
          <button>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
