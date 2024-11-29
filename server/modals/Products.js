import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    title:{type:String,required:true},
    color:{type:String,required:true},
    rating:{type:String,default:'0'},
    image: {
        type: String,
        required: true, 
      }
})

const Product = new mongoose.model('Product',productSchema)

export default Product