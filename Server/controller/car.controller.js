import { uploadOnCloudinary } from "../../../Funtube/src/utils/cloudinary.js";
import { Cars } from "../models/car.model.js";

const AddCar = async(req,res) => {
  const { brand, name, doors, price, type } = req.body

  if([brand, name, doors, price, type].some((field)=>
    field?.trim()===''
  )){
    throw console.error("All fields are required");
  }

  const carImageLocalPath = req.files?.carImage[0]?.path;
  if(!carImageLocalPath){
    throw console.error('Car image is required');
  }

  const carImage = await uploadOnCloudinary(carImageLocalPath)
  if(!carImage){
    throw console.error('CarImage not found');
  }

  const carData = await Cars.create({
    name,
    brand,
    type,
    doors,
    price,
    carImage:carImage.url
  })

  return res.status(200).json(carData)
}

const getCars = async(_, res) => {

  try {
    const allCars = await Cars.find()
    return res.status(200).json(allCars)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
}

export  {AddCar, getCars}