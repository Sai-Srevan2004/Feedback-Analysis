import React from "react";
import './Dashboard.css'; // Import the separate CSS file
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Left Div */}
      <div className="left-div">
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <h2>No of Feedback Generated</h2>
        <p className="value">120</p>
        </div>
        <Link to='/'><button>Go back</button> </Link>
      </div>

      {/* Right Div */}
      <div className="right-div">
        <h2>Feedback History</h2>
        <ul className="history-list">
          <li>2024-11-15 - Feedback ID: 12345</li>
          <li>2024-11-14 - Feedback ID: 12344</li>
          <li>2024-11-13 - Feedback ID: 12343</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
