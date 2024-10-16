import React from 'react'
import './Section4.css'
const Section4 = ({showReview}) => {
    return (
        
            showReview && (<div className='section4' id='review'>
            <div className="summary-container">
            <h1>Summary</h1>
                <div className="left-column">
                    <div className="row">
                        <div className="pie-chart">
                            <h2>Feedback Distribution</h2>
                            <div className="placeholder">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTptd4Se0eo3izMISMgeHv0RwaL2cEx8-N5n5EI-nCHhfgn5inW8UyDUuA&s" alt="" />
                            </div>
                        </div>
                        <div className="summary-review">
                            <h2>Summary of Reviews</h2>
                            <p>Average Rating: 4.5/5</p>
                            <p>Total Reviews: 200</p>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <h2>Feedback Summary</h2>
                    <div className="summary-grid">
                        <div className="summary-item positive">
                            <h3>Positives</h3>
                            <p>75% Positive Feedback</p>
                        </div>
                        <div className="summary-item negative">
                            <h3>Negatives</h3>
                            <p>15% Negative Feedback</p>
                        </div>
                        <div className="summary-item overall">
                            <h3>Overall</h3>
                            <p>85% Overall Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
        
    )
}

export default Section4
