const User = require("../models/user")
const bcrypt = require("bcryptjs")
const userIdHostlers = require("../models/userIdHostlers")
const roomHostlers = require("../models/room")

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
            res.status(201).json({result:true,user:findUser})
        }
        else{
            res.json({result:"password Wrong"})
        }
    }
    else{
        res.json({result:"email Doesnt exists"})
    }
}

exports.getHostlers = async(req,res,next) => {
    const {id} = req.params
   // console.log(id)
   const hostlers = await userIdHostlers.findOne({userId : id})

   if(hostlers){
    res.status(201).json({result:hostlers.hostlers})
   }
}

exports.delete = async(req,res,next) => {
    const userId = req.body.userId
    const roomNo = req.body.roomNo
    const uuidNo = req.body.uuidNo
    //console.log(uuidNo)

    const userHostlers = await userIdHostlers.findOne({userId : userId})
    const roomHostlersData = await roomHostlers.findOne({userId:userId,roomNo:roomNo})
    
    if(roomHostlersData){
        if(userHostlers){
            console.log(userHostlers)
            const filteredItems = userHostlers.hostlers.filter((value) => {
                //console.log(value.id !== uuidNo)
                value.id !== uuidNo
            })
            //console.log(filteredItems)
            userHostlers.hostlers = filteredItems

            const roomHostlersFilter = roomHostlersData.hostlers.filter((value) => {
                value.id !== uuidNo
            })
            roomHostlersData.hostlers = roomHostlersFilter

            await userHostlers.save()
            await roomHostlersData.save()
            res.status(201).json({result:"deleted succesfull"})
        }
    }
}

exports.edit = async(req,res,next) => {
    const userId = req.body.userId
    const roomNo = req.body.roomNo
    const uuidNo = req.body.uuidNo
    console.log(userId)
    

}