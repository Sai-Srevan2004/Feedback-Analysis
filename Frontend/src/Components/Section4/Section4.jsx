import React from 'react'
import './Section4.css'
import Loader from '../Loader/Loader'
const Section4 = ({ reviews }) => {

    return (
           
            <div id='review'>
                {
                     reviews ? (
                        <div className="summary-container" >
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
                                        {/* <p>Average Rating: 4.5/5</p> */}
                                        {/* <p>Total Reviews: {0}</p> */}
                                        <p>
                                            <span style={{ color: '#01b5b5', fontStyle: 'bold', fontSize: '1.7vmax' }}>Summary: </span>
                                            {reviews.summary}
                                        </p>
                                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}>
                                            keywords: {2}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-column">
                                <h2>Feedback Summary</h2>
                                <div className="summary-grid">
                                    <div className="summary-item positive">
                                        <h3>Positives</h3>
                                        <p>{reviews.positive || reviews.sentiments.Positive} Positive Feedback</p>
                                    </div>
                                    <div className="summary-item negative">
                                        <h3>Negatives</h3>
                                        <p>{reviews.negative || reviews.sentiments.Negative} Negative Feedback</p>
                                    </div>
                                    <div className="summary-item overall">
                                        <h3>Overall</h3>
                                        <p>{reviews.neutral || reviews.sentiments.Nuetral} Neutral Feedback</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Loader />
                    )
        
                }
            </div>
    )
}

export default Section4
