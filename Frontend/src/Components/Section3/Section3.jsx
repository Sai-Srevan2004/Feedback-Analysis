import React, { useState } from 'react';
import './Section3.css';
import axios from 'axios'

const Section3 = ({ setShowReview,setReviews}) => {

  const [url,setUrl]=useState('');

  console.log(url)

  const reviewsGet=async(url)=>{
    setShowReview(true)
    try {
      const response = await axios.post('http://localhost:7000/api/reviews/scrape-url', { url });
      setReviews(response.data);
    } catch (error) {
      console.error('Error scraping website:', error);
    }
  
  }

  return (
    <div className='section3' id='url'>
      <div className="url-input-container">
        <h1 className="title">Feedback Analysis</h1>
        <p className="description">Get insights into your product's performance.</p>
        <p className="description">Submit a product URL to start the analysis.</p>
        <div className="inputbox">
          {/* <input
            type="url"
            placeholder="Enter product URL here"
            className="url-input"
          /> */}
          <input value={url} required="required" type="url" onChange={(e)=>setUrl(e.target.value)} />
          <span>Paste your URL here</span>
          <i></i>
        </div>
        <div className="btn-div">
          <a href="#review">
            <button className='generate' onClick={()=>reviewsGet(url)}>
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
