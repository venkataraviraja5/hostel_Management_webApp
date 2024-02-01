const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userIdHostlers = new Schema({
    userId:{
        type:String,
        required:true
    },
    hostlers:{
        type:Array,
        required:true
    }
})

module.exports = mongoose.model("userhostlers",userIdHostlers)