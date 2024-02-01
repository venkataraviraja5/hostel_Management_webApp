const mongoose = require("mongoose")
const Schema = mongoose.Schema

const room = new Schema({
    userId:{
        type:String,
        required:true
    },
    roomNo:{
        type:Number,
        required:true
    },
    hostlers:{
        type:Array,
        required:true
    }
})

module.exports = mongoose.model("room",room)