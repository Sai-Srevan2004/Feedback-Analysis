import React from 'react';
import './Section3.css';

const Section3 = ({ setShowReview }) => {


  return (
    <div className='section3' id='url'>
      <div className="url-input-container">
        <h1 className="title">Feedback Analysis</h1>
        <p className="description">Get insights into your product's performance.</p>
        <p className="description">Submit a product URL to start the analysis.</p>
        <div className="url-div">
          <input
            type="url"
            placeholder="Enter product URL here"
            className="url-input"
          />
        </div>
        <div className="btn-div">
          <a href="#review">
            <button className='generate' onClick={() => setShowReview(true)}>
              Generate Summary
            </button>
          </a>
        </div>
        <p className="footer-text">Your URL will be analyzed for feedback trends.</p>
      </div>
    </div>
  );
};

export default Section3;
