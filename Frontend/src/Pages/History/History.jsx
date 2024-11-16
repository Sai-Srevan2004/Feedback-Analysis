import React, { useEffect, useState } from "react";
import axios from "axios";
import "./History.css";
import { useParams } from "react-router-dom";

const History = () => {
  const { id } = useParams();
  const [historyData, setHistoryData] = useState(null);
  const storedToken = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    console.log(id)
    const fetchHistory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/users/getuserhistory/${id}`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        setHistoryData(response.data.data);
        console.log("feed:",response.data)
      } catch (err) {
        console.log(err)
      }
    };

    if (id && storedToken) {
      fetchHistory();
    }
  }, [id, storedToken]);


  return (
    <div style={{ minHeight: "82.5vh" }}>
      {historyData ? (
           <div className="summary-container" >
           <div className="left-column">
               <div className="row">
                   <div className="summary-review">
                       {/* <p>Average Rating: 4.5/5</p> */}
                       {/* <p>Total Reviews: {0}</p> */}
                       <p>
                           <span style={{ color: '#01b5b5', fontStyle: 'bold', fontSize: '1.7vmax' }}>Summary: </span>
                           {historyData.summary}
                       </p>
                       <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}>
                           keywords: {2}
                       </div>
                   </div>
               </div>
           </div>
           <div className="right-column">
               <div className="summary-grid">
                   <div className="summary-item positive">
                       <h3>Positives</h3>
                       <p>{historyData.positive } Positive Feedback</p>
                   </div>
                   <div className="summary-item negative">
                       <h3>Negatives</h3>
                       <p>{historyData.negative } Negative Feedback</p>
                   </div>
                   <div className="summary-item overall">
                       <h3>Overall</h3>
                       <p>{historyData.neutral} Neutral Feedback</p>
                   </div>
               </div>
           </div>
       </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default History;
