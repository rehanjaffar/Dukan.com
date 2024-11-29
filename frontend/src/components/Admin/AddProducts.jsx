import axios from "axios";
import React, { useState } from "react";

export default function AddProducts() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(null); // State to store the uploaded file

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("color", color);
    formData.append("rating", rating);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/product/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Product created");
      setTitle("");
      setColor("");
      setRating("");
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full flex justify-center items-center">
      <form className="min-w-full" onSubmit={handleClick}>
        <h2 className="text-4xl font-bold p-5">Add Products</h2>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-2xl font-medium py-1">
            Title
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product Name"
            className="border border-slate-300 outline-none min-h-10 p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="color" className="text-2xl font-medium py-1">
            Product Color
          </label>
          <input
            type="text"
            required
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Color of Product"
            className="border border-slate-300 outline-none min-h-10 p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="rating" className="text-2xl font-medium py-1">
            Rating
          </label>
          <input
            type="text"
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rating"
            className="border border-slate-300 outline-none min-h-10 p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="text-2xl font-medium py-1">
            Product Image
          </label>
          <input
            type="file"
            required
            onChange={(e) => setImage(e.target.files[0])} // Set image file
            className="border border-slate-300 outline-none min-h-10 p-2"
          />
        </div>
        <div className="flex mt-5 items-center justify-center">
          <button className="bg-teal-500 text-white p-5 rounded">Add Product</button>
        </div>
      </form>
    </div>
  );
}
