import React from 'react';

const Extra = ({ showReview, reviews }) => {

  if (reviews) {
    console.log(reviews);
  }

  return (
    showReview && (
      <div style={{ minHeight: '100vh' }} id='review'>
        {
          reviews ? (
            <>
              <h1>Ratings</h1>
              {
                reviews.rating && reviews.rating.length > 0 ? (
                  reviews.rating.map((z, index) => (
                    <div key={index}>
                      {z}
                      <br />
                    </div>
                  ))
                ) : <p>No ratings available</p>
              }
              <h2>Reviews</h2>
              {
                reviews.review_text && reviews.review_text.length > 0 ? (
                  reviews.review_text.map((z, index) => (
                    <div key={index}>
                      {index + 1}. {z}
                      <br />
                      <br />
                      <br />
                    </div>
                  ))
                ) : <p>No reviews available</p>
              }
            </>
          ) : (
            <h1>Loading...</h1>
          )
        }
      </div>
    )
  );
};

export default Extra;
