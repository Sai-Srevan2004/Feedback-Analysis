import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="stats-card">
          <h2>Total Reviews</h2>
          <p>1500</p>
        </div>
        <div className="stats-card">
          <h2>Positive Feedback</h2>
          <p>85%</p>
        </div>
        <div className="stats-card">
          <h2>Negative Feedback</h2>
          <p>15%</p>
        </div>
      </div>
      <div className="home-btn">
        <Link to='/'><button>Go Back</button></Link>
      </div>
    </div>
  );
};

export default Dashboard;
