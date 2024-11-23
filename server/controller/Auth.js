import UserModal from "../modals/Auth.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config()

const secretKey = process.env.SECKRET_KEY;




const register = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const user = await UserModal.findOne({email})
        if(user){
            res.status(402).json({success:false,message:"user already exist"})
        }

const hashPass = await bcrypt.hash(password,10);
    const newUser = new UserModal({
        name,email,password:hashPass
    })
   await newUser.save();
   res.status(200).json({success:true,message:"user register successfully"})
    } catch (error) {
        console.log('controller'+ error);
        
    }
}


const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await UserModal.findOne({email:email})
        if(!user){
            res.status(402).json({success:false,message:"user not found"})
        }
        const isValidate =await bcrypt.compare(password,user.password)
        if(!isValidate){
        res.status(402).json({success:false,message:"wrong password"})
        }


        const token = jwt.sign({id:user._id}, secretKey,{expiresIn:"1h"})
res.cookie("token", token, {httpOnly:true, secure:false,sameSite:"Lax"}).send('Login Successfully')

    } catch (error) {
        console.log(error);
        
    }
}

const checkAuth = (req,res)=>{
const token = req.cookies.token;
if(!token){
    return res.json({authenticated:false,message:"token not found"})
}
try {
    jwt.verify(token,secretKey);
    res.json({authenticated:true,message:"token found"})
    console.log('token found');
    
} catch (error) {
    if(error.name === 'TokenExpiredError'){
    res.json({authenticated:false,message:"token expired"})

    }
    console.log(error);
    res.json({authenticated:false})
    
}
}

const showUser = async (req,res)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).send('token not found')
    }
    try {
        const decode = jwt.verify(token,secretKey);
       const user =await  UserModal.findById(decode.id);
        if (!user) {
          return res.status(404).send("User not found");
        }
        res.json({ username: user.name }); 
    }
        catch (error) {
        console.log(error);
        
    }
}

const logout = (req,res)=>{
    res.clearCookie("token", {
        httpOnly: true,
        secure: false, 
        sameSite: "Lax",
      });
      res.send("Logged out successfully");
}
export {register,login,checkAuth,showUser,logout}