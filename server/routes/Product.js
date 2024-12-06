import express from 'express'



import { createAllProducts, createProduct, deleteProduct, showProduct } from '../controller/Product.js';
import upload from '../middlewares/multer.js';


const router = express.Router();


  
  // Endpoint to upload product with image
  router
  .post("/create", upload.single("image"), createProduct)
 .post('/createall', createAllProducts)
.get("/show", showProduct)
 .delete('/delete/:id', deleteProduct);
export default router