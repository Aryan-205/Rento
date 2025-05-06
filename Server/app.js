import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app = express()

app.use(cors({
  origin : process.env.CORS_ORIGIN,
  credentials:true 
}))

import carRouter from './route/car.route.js'

app.use('/car/v1',carRouter)

export { app }