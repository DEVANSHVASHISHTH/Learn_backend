// require('dotenv').config({path: './env'})  we can also import this by adding som lines in scripts.
import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()



















// this connect in different folder 
/*
import express from "express"
const app=express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)     ///videotube → which database inside that server
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
    */
//5.3 video pe cmmnt likhna h