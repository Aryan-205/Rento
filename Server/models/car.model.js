import mongoose from "mongoose";

const Schema = mongoose.Schema

const CarSchema = new Schema({

  carImage:{
    type:String,
    required:true,
  },
  brand:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
    trim:true
  },
  doors:{
    type:Number,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  type:{
    type:String,
    required:true
  }
})
export const Cars = mongoose.model('Cars',CarSchema)