import React, { useState, useEffect } from 'react';
import './Section4.css';
import Loader from '../Loader/Loader'

const Section4 = ({ reviews }) => {
  const [loading, setLoading] = useState(true);

  console.log(reviews)

  useEffect(() => {
    if (reviews && reviews.get_reviews) {
      setLoading(false);  // Once reviews are available, set loading to false
    }
  }, [reviews]);

  // Early return if reviews or its necessary properties are not available
  if (loading || !reviews) {
    return (
      <div className="loader">
        <Loader/>
      </div>
    );
  }

  const {
    summary,
    keywords: { positive_keywords, negative_keywords } = {},  // Default empty object if undefined
    sentiments: { Positive, Negative, Nuetral } = {},  // Default empty object if undefined
    get_reviews: { avgRating } 
  } = reviews;

  

  return (
    <div id="review" className="section4-container">
      <div className="section4-content">
        <div className="section4-summary">
          <h3>Summary</h3>
          <p>{summary || "No summary available"}</p>
        </div>

        <div className="section4-details">
          <div className="section4-sentiments">
            <h3>Positives Neutral Negatives</h3>
            <div className="sentiment-box-wrapper">
              <div className="sentiment-box positive">
                <span>{Positive }</span>
              </div>
              <div className="sentiment-box neutral">
                <span>{Nuetral }</span>
              </div>
              <div className="sentiment-box negative">
                <span>{Negative}</span>
              </div>
            </div>
          </div>

          <div className="section4-pros-cons">
            <div className="pros">
              <h3>Pros</h3>
              {positive_keywords?.map((keyword, index) => (
                <span key={index} className="keyword-item">{keyword}</span>
              )) || "No pros available"}
            </div>

            <div className="cons">
              <h3>Cons</h3>
              {negative_keywords?.map((keyword, index) => (
                <span key={index} className="keyword-item">{keyword}</span>
              )) || "No cons available"}
            </div>
          </div>
        </div>

        <div className="section4-rating">
          <h3>Average Rating</h3>
          <div className="rating-value">
            <span>{avgRating || rating} / 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
