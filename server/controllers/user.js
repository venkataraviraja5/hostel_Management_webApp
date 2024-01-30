const User = require("../models/user")
const bcrypt = require("bcryptjs")

exports.signupUser = async(req,res,next) => {
    const email = req.body.email
    const password = req.body.password
   // console.log(email)
    const emailCheck = await User.findOne({email : email})
    if(emailCheck){
        res.json({result:"email already exists"})
    }
    else{
        const hashpassword = await bcrypt.hash(password,12)
        if(hashpassword){
         const createUser = new User({
            email:email,
            password:hashpassword
         })
         createUser.save()
         res.status(201).json({result:true})
        }
    }
}

exports.loginUser =async (req,res,next) => {
    const email = req.body.email
    const password = req.body.password
   // console.log(email)
    
    const findUser = await User.findOne({email:email})
    if(findUser){
        const hashpassword = await bcrypt.compare(password,findUser.password)
        if(hashpassword){
            res.status(201).json({result:true})
        }
        else{
            res.json({result:"password Wrong"})
        }
    }
    else{
        res.json({result:"email Doesnt exists"})
    }
}