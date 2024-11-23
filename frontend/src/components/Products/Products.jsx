import React from "react";
import { FaStar } from "react-icons/fa6";
import { content } from "./content";


const Products = () => {
  const { products } = content;
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
            {products.map((product,i) => (
              <div
                data-aos="fade-up"

                key={i}
                className="space-y-3"
              >
                <img
                  src={product.img}
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
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
