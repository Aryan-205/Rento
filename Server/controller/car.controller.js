import { uploadOnCloudinary } from "../../../Funtube/src/utils/cloudinary.js";
import { Cars } from "../models/car.model.js";

const AddCar = async(req,res) => {
  const { brand, name, doors, price, type } = req.body
  //brand, name, doors, price, type

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

  return res.send(200).json(carData)
}
export default AddCar