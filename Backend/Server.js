const express=require('express')
const app=express()
require('dotenv').config()

const PORT=process.env.PORT || 5000


//db function
const Db=require('./Config/Db')

Db()






app.listen(PORT,()=>{
    console.log("Server Started at port",PORT)
})


