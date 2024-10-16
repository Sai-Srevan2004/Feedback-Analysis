const User=require('../Models/UserModel')
const bcrypt=require('bcrypt')

const SignUpController=async(req,res)=>{
    try {
        const {username,email,password,cpassword,role}=req.body

        const exist=await User.findOne({email})

        if(exist)
        {
            return res.json({
                success:false,
                message:"Email already exists!",
            })
        }

        if(password!==cpassword)
        {
            return res.json({
                message:"Passwords do not match"
            })
        }
        let hashedPassword
        try {
            hashedPassword=await bcrypt.hash(password,10)

        } catch (error) {
            console.log(error)
            return res.json({
                message:"Internal Server Error",
                data:"Could not hash the password!"
             })
        }

        const createUser = await User.create({
            username,email,password:hashedPassword,role
        })
    
        if(!createUser)
        {
            return res.json({
                success:false,
                message:"User could not create!"
            }) 
        }


        return res.json({
            success:true,
            data:createUser,
            message:"Registration Successfull!"
        })

    } catch (error) {
        console.log(error)
        return res.json({
            success:false,
            data:"Internal Server Error!",
            message:"Registration Failed!"
        })
    }
}


module.exports={SignUpController}

