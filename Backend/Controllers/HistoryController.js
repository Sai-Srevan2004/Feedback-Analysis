const History =require('../Models/HistoryModel')
const User=require('../Models/UserModel')

const storeHistory=async(req,res)=>{
  
  try {
    const id=req.user.id;

    const {summary,email,positive,negative,neutral}=req.body

    if(!summary || !email || !positive || !negative || !neutral)
    {
        return res.json({
            success:false,
            message:"All fileds required for history storing!"
        })
    }

    const userExists=await User.findById(id)


    if(!userExists)
    {
        return res.json({
            success:false,
            message:"History of user cannot be stored as no user found with that id!"
        })
    }

    const HistoryUser=await History.create({
        summary,
        email,
        positive,
        negative,
        neutral
    })
    
    const updateUserReviewArr=await User.findByIdAndUpdate(id,{
        $push:{
            reviews:HistoryUser._id,
        }
    })

    return res.json({
        success:false,
        message:"History stored Succesfully!",
        data:HistoryUser,
        updatedReviwesArray:updateUserReviewArr
    })
    
  } catch (error) {
    return res.json({
        success:false,
        message:"Something wrong while storing history of user!"
    })
  }
}

module.exports={storeHistory}