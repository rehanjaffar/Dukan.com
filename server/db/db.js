import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()

const MONGo_URL = process.env.MONGo_URL

const connectDB = async ()=>{
    try {
       await mongoose.connect('mongodb://localhost:27017/dukan-db')
        console.log('database is connected');
        
    } catch (error) {
        console.log(error);
       
        
        
    }
}

export default connectDB