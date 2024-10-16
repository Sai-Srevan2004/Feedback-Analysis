const express=require('express')
const router=express.Router()

//importing signup controller

const {SignUpController} =require('../Controllers/UserController')


//Sign Up Route

router.post('/signup',SignUpController)



module.exports=router