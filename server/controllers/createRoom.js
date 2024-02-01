const User = require("../models/user")
const Room = require("../models/room")
const userIdHostlers = require("../models/userIdHostlers")
const uuid = require("uuid")

exports.createRoom = async(req,res,result) => {
    const {id} = req.params
    const roomNumber = req.body.roomNumber
    const room = await Room.find({userId : id, roomNo : roomNumber})
   // const roomnos = room.rooms
    //console.log(room)

   if(room.length == 0){
    const newRoom = new Room({
        userId:id,
        roomNo:roomNumber,
        hostlers:[]
    })
    await newRoom.save()
    res.status(201).json({result:"room created succesfull"})
   }
   else{
    res.json({result:"Room Number Already Exists"})
   }

}

exports.joinRoom = async(req,res,next) => {
    const name = req.body.hostlerName
    const roomNo = req.body.roomNo
    const amount = req.body.amount
    const date = req.body.date
    const userId = req.body.userId
    const id = uuid.v4()

    const user = await Room.findOne({userId : userId,roomNo:roomNo})
    const userhostlers = await userIdHostlers.findOne({userId : userId})
    //console.log(user.hostlers)

    if(user){
        if(userhostlers.length === 0){
            const newHostler = new userIdHostlers({
                userId:userId,
                hostlers:[{id:id,name:name,roomNo:roomNo,amount:amount,date:date}]
            })
            user.hostlers.unshift({id:id,name:name,roomNo:roomNo,amount:amount,date:date})

            await newHostler.save()
            await user.save()
            res.json({result:"Entered succesfull"})
        }
        else{
            //console.log(userhostlers.hostlers)
           userhostlers.hostlers.unshift({id:id,name:name,roomNo:roomNo,amount:amount,date:date})
           user.hostlers.unshift({id:id,name:name,roomNo:roomNo,amount:amount,date:date})

           await userhostlers.save()
           await user.save()
           res.status(201).json({result:"Entered succesfull"})
        }
    }
    else{
        res.json({result:"roomNo Doesnt exits"})
    }

}