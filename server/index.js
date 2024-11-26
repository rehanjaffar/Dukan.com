import express from 'express'
import cors from 'cors'
import connectDB from './db/db.js';
import router from './routes/Auth.js';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()
import path from 'path'

const app = express();


const PORT = process.env.PORT || 3000;

//midleware

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api/auth', router)
app.use(express.static(path.resolve('dist')))

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is started at port ${PORT}`);
   
})