const express=require('express')
const app=express()
require('dotenv').config()

//Importing router
const UserRouter=require('./Routes/UserRoutes')

const PORT=process.env.PORT || 5000


//middlewares
app.use(express.json())

app.use("/api/users",UserRouter)


//db function
const Db=require('./Config/Db')

Db()

app.listen(PORT,()=>{
    console.log("Server Started at port",PORT)
})


