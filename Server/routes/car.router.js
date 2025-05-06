import { Router } from "express";
import { upload } from "../../../Funtube/src/middlewares/multer.middleware";
import AddCar from "../controller/car.controller";

const router = Router()

router.route("/admin").post(
  upload.fields([
    {
      name:'carImage',
      max:1
    }]),
  AddCar
)