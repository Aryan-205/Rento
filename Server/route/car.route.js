import { Router } from "express";
import { upload } from '../middleware/multer.middleware.js'
import AddCar from "../controller/car.controller.js";

const router = Router();

router.route("/admin").post(
  upload.fields([{
    name:"carImage",
    max:1
  }]),
  AddCar
)

export default router