// src/components/ProductList.jsx
import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/ProductSlice";
import { FaStar } from "react-icons/fa6";

import Img1 from "../../assets/women/women.png";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

function ProductList() {
  const [products,setProducts] = useState([])
  const {productData} = useContext(ProductContext)
 
  useEffect(() => {
   setProducts(productData)
  }, []);



  return (
    
     <div className="mt-14 mb-12">
     <div className="container">
       {/* Header section */}
       <div className="text-center mb-10 max-w-[600px] mx-auto">
         <p data-aos="fade-up" className="text-sm text-primary">
           Top Selling Products for you
         </p>
         <h1 data-aos="fade-up" className="text-3xl font-bold">
           Products
         </h1>
         <p data-aos="fade-up" className="text-xs text-gray-400">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
           asperiores modi Sit asperiores modi
         </p>
       </div>
       {/* Body section */}
       <div>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
           {/* card section */}
           {products.slice(0,10).map((product,i) => (
             <div
               data-aos="fade-up"
data-aos-delay={i*450}
               key={i}
               className="space-y-3"
             >
               <img
                 src={product.image}
                 alt=""
                 className="h-[220px] w-[150px] object-cover rounded-md cursor-pointer hover:scale-105 duration-300"
               />
               <div>
                 <h3 className="font-semibold">{product.title}</h3>
                 <p className="text-sm text-gray-600">{product.color}</p>
                 <div className="flex items-center gap-1">
                   <FaStar className="text-yellow-400" />
                   <span>{product.rating}</span>
                 </div>
               </div>
             </div>
           ))}
         </div>
         {/* view all button */}
         <div className="flex justify-center">
          <Link to='/products'>
           <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
             View All Products
           </button></Link>
         </div>
       </div>
     </div>
   </div>
  );
}

export default ProductList;
