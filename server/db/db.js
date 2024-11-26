import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()

const MONGO_URL = process.env.MONGO_URL

const connectDB = async ()=>{
    try {
       await mongoose.connect(MONGO_URL)
        console.log('database is connected');
        
    } catch (error) {
        console.log(error);
       
        
        
    }
}

export default connectDB