import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { ProductContext } from "../../context/ProductContext";

function ProductList() {
 
  const {productsData} = useContext(ProductContext)


 

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, sePostPerPage] = useState(10);
 
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = productsData.slice(firstPostIndex, lastPostIndex);

  

  let pages = [];
  for (let i = 1; i <= Math.ceil(productsData.length / postPerPage); i++) {
    pages.push(i);
  }
 


  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p  className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1  className="text-3xl font-bold">
            Products
          </h1>
          <p  className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Products Grid */}
        <div>
          <div className="grid grid-cols-auto place-items-center gap-5">
            {currentPost.map((product, i) => (
              <div
                key={i}
                className="space-y-3 dark:border-white dark:border-2 w-full dark:border-solid dark:rounded"
              >
                <img
                  src={product._id ? `http://localhost:5000/${product.image}`:product.image}
                  alt={product.title}
                  className="h-[220px] w-full object-cover rounded-md cursor-pointer hover:translate-y-[-10px] transition-all duration-300"
                />
                <div>
                  <h3 className="font-semibold p-1">{product.title}</h3>
                  <p className="text-sm text-gray-600 p-1">{product.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <div className="pagination flex flex-wrap gap-2">
              {pages.map( (item,i) => (
                <button
                  key={i}
                  onClick={() => {setCurrentPage(i + 1);scrollTo(0,0)}}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {i +1}
                </button>
              ))}
            </div>

          </div>

        
        </div>
      </div>
    </div>
  );
}

export default ProductList;
