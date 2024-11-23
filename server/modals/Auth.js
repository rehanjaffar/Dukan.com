import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    enum:{type:String,enum:["user","admin"],default:"user"},
})

const UserModal = mongoose.model('User', userSchema);

export default UserModal