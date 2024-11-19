import React, { useEffect, useState } from 'react';
import './Section3.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Section3 = ({ setShowSection4, setReviews }) => {
  const [url, setUrl] = useState('');
  const [triggerApi, setTriggerApi] = useState(false);
  const navigate = useNavigate();

  const fetchReviews = async () => {
    if (triggerApi && url) {
      try {
        const storedToken = JSON.parse(localStorage.getItem('token'));

        if (!storedToken) {
          throw new Error("Authorization token is missing.");
        }

        const response = await axios.post(
          'http://localhost:7000/api/users/gethistory',
          { url },
          { headers: { Authorization: `Bearer ${storedToken}` } }
        );

        if (response.data.success && response.data.data) {
          setReviews(response.data.data);
          toast.success('Reviews fetched from database!');
        } else {
          const apiResponse = await axios.post(
            'http://localhost:7000/api/reviews/scrape-url',
            { url },
            { headers: { Authorization: `Bearer ${storedToken}` } }
          );

          if (apiResponse.data.success) {
            const reviewData = apiResponse.data.data;
            const structuredData = {
              summary: reviewData.summary,
              keywords: {
                positive_keywords: reviewData.keywords.positive_keywords,
                negative_keywords: reviewData.keywords.negative_keywords,
              },
              sentiments: {
                Positive: reviewData.sentiments.Positive,
                Negative: reviewData.sentiments.Negative,
                Nuetral: reviewData.sentiments.Nuetral,
              },
              get_reviews: {
                avgRating: reviewData.get_reviews.rating.reduce((acc, curr) => acc + curr, 0) / rating.length.toFixed(1),
              },
            };


            await axios.post(
              'http://localhost:7000/api/users/history',
              { url, reviews: structuredData },
              { headers: { Authorization: `Bearer ${storedToken}` } }
            );

            setReviews(reviewData);
            toast.success('Summary generated successfully!');
          } else {
            throw new Error('Something went wrong generating the summary!');
          }
        }
      } catch (error) {
        const errorMsg = error.response?.data?.error || error.message || 'Error fetching reviews!';
        console.error('Error fetching reviews:', errorMsg);
        toast.error(errorMsg);
        window.location.hash = "#url";
        setShowSection4(false);
      } finally {
        setTriggerApi(false);
        setUrl('');
      }
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [triggerApi]);

  const reviewsGet = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      toast('Please Login to proceed!', { icon: '⚠️' });
      navigate('/');
      return;
    }

    if (!url) {
      toast('URL is required!', { icon: '⚠️' });
      setShowSection4(false);
      return;
    }

    setReviews('');
    setShowSection4(true);
    setTriggerApi(true);

   
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
            onChange={(e) => setUrl(e.target.value)}
          />
          <span>Paste your URL here</span>
          <i></i>
        </div>
        <div className="btn-div">
          <a href="#review" onClick={reviewsGet}>
            <button
              className={`${triggerApi ? 'generate-two' : 'generate'}`}
              disabled={triggerApi}
            >
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