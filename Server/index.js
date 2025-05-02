import dotenv from 'dotenv'
import express from 'express'
import connectDB from "./db/db";

const app = express()

dotenv.config({
  path: './env'
})

connectDB
  .then(()=>(
    app.listen(process.env.PORT,()=>{
      console.log("Listening to port")
    })
  ))
  .catch(()=>{
    console.log('connection error at port')
  })