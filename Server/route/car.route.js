import { Router } from "express";
import { upload } from '../middleware/multer.middleware.js'
import {AddCar, getBrand, getCars} from "../controller/car.controller.js";

const router = Router();

router.route("/admin").post(
  upload.fields([{
    name:"carImage",
    max:1
  }]),
  AddCar
)

router.route("/cars").get(getCars)

router.route("/cars").get(getBrand)

export default router