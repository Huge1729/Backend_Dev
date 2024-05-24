// require('dotenv').config({ path: './env' })
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from './app.js'
dotenv.config({
    path: './.env'
})
// console.log(process.env.MONGODB_URI)
connectDB()     // asynchronus methods complete hone ke baad promise return krta haii
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("MONGODB Connection Failed !!", error)
    })





/*
import { DB_NAME } from "./constants"
import mongoose from "mongoose"

import express from "express"
const app = express() 
//  iffi fn
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/

/* app,send having 4 paramter (err , req , res , next)
URL se jo data aata hai usko req.params se deal krte hai




*/