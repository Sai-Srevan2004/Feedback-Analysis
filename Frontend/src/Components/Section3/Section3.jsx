import React, { useEffect, useState } from 'react';
import './Section3.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Section3 = ({ setShowSection4, setReviews }) => {
  const [url, setUrl] = useState('');
  const [triggerApi, setTriggerApi] = useState(false);
  const navigate = useNavigate();  // Initialize navigate

  // Function to fetch reviews
  const fetchReviews = async () => {
    if (triggerApi && url) {  // Only trigger the API call when both triggerApi and URL are set
      try {
        const response = await axios.post('http://localhost:7000/api/reviews/scrape-url', { url });
        if (response.data.success) {
          setReviews(response.data.data);
          toast.success('Summary generated successfully!');
        } else {
          toast.error('Something went wrong generating the summary!');
          setShowSection4(false);
        }
      } catch (error) {
        console.log('Error scraping website:', error.response?.data?.error);
        toast.error('Error scraping the website!');
        setShowSection4(false);
      } finally {
        setTriggerApi(false); // Reset API trigger after the call
       setUrl('')
      }
    }
  };

  // This useEffect will call the API whenever the URL changes after the button is clicked
  useEffect(() => {
    fetchReviews();
  }, [url, triggerApi, setReviews, setShowSection4]);  // Effect depends on both URL and triggerApi but setReviews, setShowSection4 are optional dependencies

  // This function is called when the user clicks the "Generate Summary" button
  const reviewsGet = () => {
    const token = localStorage.getItem('token'); // Check if token exists

    if (!token) {
      toast("Please Login to proceed!", {
        icon: '⚠️'
      });
      navigate('/');  // Redirect to login page
      return; // Prevent further execution if the user is not logged in
    }

    if (!url) {
      toast("URL is required!", {
        icon: '⚠️'
      });
      return; // Prevents further execution if the URL is not provided
    }

    setShowSection4(true);  // Show section 4 before starting the API call
    setTriggerApi(true);    // Set triggerApi to true to trigger the API call in useEffect
  };

  return (
    <div className='section3' id='url'>
      <div className="url-input-container">
        <h1 className="title">Feedback Analysis</h1>
        <p className="description">Get insights into your product's performance.</p>
        <p className="description">Submit a product URL to start the analysis.</p>
        <div className="inputbox">
          <input
            value={url}
            required="required"
            type="url"
            onChange={(e) => setUrl(e.target.value)} // URL change handler
          />
          <span>Paste your URL here</span>
          <i></i>
        </div>
        <div className="btn-div">
          <a href="#review">
            <button className='generate' onClick={reviewsGet} >
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
