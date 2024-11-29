import express from 'express'
import Product from '../modals/Products.js';
import multer from "multer";
import path from "path";


const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/"); // Folder to save images
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname); // Unique file name
    },
  });
  
  const upload = multer({ storage });
  
  // Endpoint to upload product with image
  router.post("/create", upload.single("image"), async (req, res) => {
    const { title, color, rating } = req.body;
    const imagePath = req.file ? req.file.path : null;
  
    try {
      const newProduct = new Product({ title, color, rating, image: imagePath });
      await newProduct.save();
      res.status(200).json({ success: true, message: "Product saved successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error saving product", error });
    }
  });

  router.post('/createall', async (req, res) => {
    try {
        const products = req.body; // Expecting an array of products
        if (!Array.isArray(products)) {
            return res.status(400).json({ success: false, message: "Input data should be an array of products." });
        }
        
        const newProducts = await Product.insertMany(products); // Save all products at once
        res.status(200).json({ success: true, message: "Products saved successfully", data: newProducts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


router.get("/show", async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({ success: true, products });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error fetching products", error });
    }
  });

router.delete('/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error deleting product" });
    }
  });
export default router