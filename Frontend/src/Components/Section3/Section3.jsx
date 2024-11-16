import React, { useEffect, useState } from 'react';
import './Section3.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Section3 = ({ setShowSection4, setReviews }) => {
  const [url, setUrl] = useState('');
  const [triggerApi, setTriggerApi] = useState(false);
  const navigate = useNavigate();

  // Function to fetch reviews from the database or API
  const fetchReviews = async () => {
    if (triggerApi && url) {
      try {
        const storedToken = JSON.parse(localStorage.getItem('token')); // Removes extra quotes

        if (!storedToken) {
          throw new Error("Authorization token is missing.");
        }

        // Check if the reviews for the URL are already available in the database
        const response = await axios.post(
          'http://localhost:7000/api/users/gethistory',
          { url }, // Sending URL in the request body
          { headers: { Authorization: `Bearer ${storedToken}` } }
        );
        
         console.log("db:",response.data)
        if (response.data.success && response.data.data) {
          // If reviews are found in the database, show them
          setReviews(response.data.data);
          toast.success('Reviews fetched from database!');
        } else {
          // If no reviews in the database, trigger API call
          const apiResponse = await axios.post(
            'http://localhost:7000/api/reviews/scrape-url',
            { url },
            { headers: { Authorization: `Bearer ${storedToken}` } }
          );

          if (apiResponse.data.success) {
            // Store the fetched reviews in the database
            await axios.post(
              'http://localhost:7000/api/users/history',
              { url, reviews: apiResponse.data.data },
              { headers: { Authorization: `Bearer ${storedToken}` } }
            );
            setReviews(apiResponse.data.data);
            toast.success('Summary generated successfully!');
          } else {
            throw new Error('Something went wrong generating the summary!');
          }
        }
      } catch (error) {
        const errorMsg = error.response?.data?.error || error.message || 'Error fetching reviews!';
        console.error('Error fetching reviews:', errorMsg);
        toast.error(errorMsg);
        setShowSection4(false);
      } finally {
        setTriggerApi(false);
        setUrl('');
      }
    }
  };

  // This useEffect will call the API whenever the URL changes after the button is clicked
  useEffect(() => {
    fetchReviews();
  }, [triggerApi]);

  // This function is called when the user clicks the "Generate Summary" button
  const reviewsGet = () => {
    const token = localStorage.getItem('token'); // Check if token exists

    if (!token) {
      toast('Please Login to proceed!', { icon: '⚠️' });
      navigate('/'); // Redirect to login page
      return;
    }

    if (!url) {
      toast('URL is required!', { icon: '⚠️' });
      return;
    }

    setReviews(''); // Clear previous reviews
    setShowSection4(true); // Show section 4 before starting the API call
    setTriggerApi(true); // Set triggerApi to true to trigger the API call in useEffect
  };

  return (
    <div className="section3" id="url">
      <div className="url-input-container">
        <h1 className="title">Feedback Analysis</h1>
        <p className="description">Get insights into your product's performance.</p>
        <p className="description">Submit a product URL to start the analysis.</p>
        <div className="inputbox">
          <input
            value={url}
            required
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
