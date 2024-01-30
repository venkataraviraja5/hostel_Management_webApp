const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const user = require("./routes/user")
const cors = require("cors")

const dbURI = 'mongodb+srv://raviraja2000:raviraja2000@cluster0.eabcdxj.mongodb.net/hostel';

app.use(bodyParser.json())
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin",'*')
  res.setHeader("Access-Control-Allow-Methods",'OPTIONS,GET,POST,PUT,PATCH,DELETE')
  res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization,Accept')
  next()
})
app.use(user)
app.use(cors())

const dbFunction = async() => {
    try {
        await mongoose.connect(dbURI);
        console.log('Connected to the database');
      } catch (error) {
        console.error('Error connecting to the database:', error.message);
        process.exit(1);
      }
}

app.listen(8080,() => {
    console.log("server running on 8080")
    dbFunction()
})
