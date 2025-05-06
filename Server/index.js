import dotenv from 'dotenv'
import connectDB from "./db/db.js";
dotenv.config()

import { app } from './app.js';

connectDB()
  .then(()=>(
    app.listen(process.env.PORT,()=>{
      console.log("Listening to port",process.env.PORT)
    })
  ))
  .catch(()=>{
    console.log('connection error at port')
  })