import React from 'react'
import './Section5.css'

const Section5 = () => {
    const reviews = [
        {
          id: 1,
          rating: 5,
          description: 'Excellent service and great experience!',
          user:'ram'
        },
        {
          id: 2,
          rating: 4,
          description: 'Very satisfied with the quality of the product.',
          user:'raj'
        },
        {
          id: 3,
          rating: 4,
          description: 'Good value for money. Will buy again.',
          user:'aditya'
        },
        {
          id: 4,
          rating: 5,
          description: 'Amazing customer support and fast delivery!',
          user:'akash'
        },
        {
          id: 5,
          rating: 3,
          description: 'Average experience, could be improved.',
          user:'kalyan'
        },
        {
          id: 6,
          rating: 2,
          description: 'Not satisfied with the quality.',
          user:'sai'
        },
      ];
    
      return (
        <div className="reviews-container">
          <h1 className="title">What Our Users Say</h1>
          <p className='p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita voluptate deleniti magni aperiam, in explicabo ab? Eos nostrum vero non?</p>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div className="review-item" key={review.id}>
                <div className="rating">Rating: {review.rating} ⭐</div>
                <p className="description">{review.description}</p>
                <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRb1fffaHZtRWNOwPGGcYWFoikhLcspKk6A&s" alt="" />
                 <p>{review.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }


export default Section5
