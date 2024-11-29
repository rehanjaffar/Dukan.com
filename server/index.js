import express from 'express'
import cors from 'cors'
import connectDB from './db/db.js';
import router from './routes/Auth.js';
import productRouter from './routes/Product.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()
import path from 'path'

const app = express();


const PORT = process.env.PORT || 3000;

//midleware

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
}))
app.use(cookieParser())
app.use('/api/auth', router)
app.use('/product', productRouter)
app.use(express.static(path.resolve('dist')))
app.use("/uploads", express.static(path.join("uploads")));

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is started at port ${PORT}`);
   
})