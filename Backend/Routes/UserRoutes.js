const express=require('express')
const router=express.Router()


//importing signup controller

const {sendOtp, signUp, login} =require('../Controllers/UserController')



//Sign Up Route

router.post('/signup',signUp)
router.post('/sendotp',sendOtp)
router.post('/login',login)



module.exports=router