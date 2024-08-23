const express=require('express')
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require('dotenv')
dotenv.config({path:'./config/config.env'})

const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(res,req)=>{
    res.statusCode(400).json({success})
})

















mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    app.listen(process.env.NODE_PORT,()=>{
        console.log(`Server running on port https://localhost:${process.env.NODE_PORT}`)
    })
}).catch((error)=>{
      console.log(error)
})