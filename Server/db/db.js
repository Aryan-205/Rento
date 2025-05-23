import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log(`Connected to mongDB!! Host:${process.env.PORT} `)
  } catch (error) {
    console.log("mongoDb connection failed",error.message)
    process.exit(1)
  }
}
export default connectDB

