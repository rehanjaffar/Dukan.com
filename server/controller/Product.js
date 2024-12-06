import Product from "../modals/Products.js";


const createProduct = async (req, res) => {
    const { title, color, rating } = req.body;
    const imagePath = req.file ? req.file.path : null;
  
    try {
      const newProduct = new Product({ title, color, rating, image: imagePath });
      await newProduct.save();
      res.status(200).json({ success: true, message: "Product saved successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error saving product", error });
    }
  }

  const createAllProducts =  async (req, res) => {
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
}


const showProduct = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({ success: true, products });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error fetching products", error });
    }
  }

  const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error deleting product" });
    }
  }

  export {createProduct, createAllProducts , showProduct, deleteProduct}