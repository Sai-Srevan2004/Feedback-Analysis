const History = require('../Models/HistoryModel');
const User = require('../Models/UserModel');


const storeHistory = async (req, res) => {
    try {
      const id = req.user.id; // Assuming the user is authenticated and the ID is attached to the request
      const { url, reviews, pros, cons } = req.body; // Extract URL, reviews, pros, and cons from the request body
       console.log(req.body)
      // Validation: Ensure both URL and reviews are provided
      if (!url || !reviews) {
        return res.json({
          success: false,
          message: 'URL and reviews are required to store the history!',
        });
      }
  
      // Check if the user exists
      const userExists = await User.findById(id);
      if (!userExists) {
        return res.json({
          success: false,
          message: 'User not found, cannot store history!',
        });
      }
  
      // Check if the history for this URL already exists in the database
      const existingHistory = await History.findOne({ url });
      if (existingHistory) {
        return res.json({
          success: true,
          message: 'History already exists for this URL!',
          data: existingHistory,
        });
      }
  
      // Extracting sentiment data from reviews if available
      const { summary, sentiments } = reviews.get_reviews;
  
      // Create a new history record if the URL does not exist
      const HistoryUser = await History.create({
        summary,
        url,
        positive: sentiments.Positive,
        negative: sentiments.Negative,
        neutral: sentiments.Nuetral,
        pros,
        cons,
      });
  
      // Add the newly created history to the user's reviews array
      const updateUserReviewArr = await User.findByIdAndUpdate(
        id,
        {
          $push: {
            reviews: HistoryUser._id, // Push the newly created history to the user's review array
          },
        },
        { new: true } // Optionally return the updated user
      );
  
      return res.json({
        success: true,
        message: 'History stored successfully!',
        data: HistoryUser,
        updatedReviwesArray: updateUserReviewArr,
      });
  
    } catch (error) {
      console.error('Error storing history:', error.message);
      return res.json({
        success: false,
        message: 'Something went wrong while storing the user history!',
      });
    }
  };
  
  

const getHistory = async (req, res) => {
 
  try {
    const { url } = req.body;  // Get the URL from the query parameters
   
    if (!url) {
      return res.json({
        success: false,
        message: 'URL is required to fetch the history!',
      });
    }

    // Check if the history exists for the provided URL
    const existingHistory = await History.findOne({ url });


    if (!existingHistory) {
      return res.json({
        success: false,
        message: 'No history found for this URL!',
      });
    }

    return res.json({
      success: true,
      message: 'History fetched successfully!',
      data: existingHistory,  // Send the found history data
    });
  } catch (error) {
    console.error('Error fetching history:', error);
    return res.json({
      success: false,
      message: 'Something went wrong while fetching the history!',
    });
  }
};


module.exports = { storeHistory,getHistory };
