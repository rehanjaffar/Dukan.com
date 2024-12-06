// src/components/ProductList.jsx
import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/ProductSlice";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { productsData } = useContext(ProductContext);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const navigate = useNavigate();

  return (
    productsData && (
      <div className="mt-14 mb-12">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm text-primary">Top Selling Products for you</p>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
          {/* Body section */}
          <div>
            <div className="grid grid-cols-auto place-items-center gap-5">
              {/* card section */}
              {products.slice(0, 6).map((product, i) => (
                <div key={i} className="space-y-3 border border-white w-full group cursor-pointer">
                  <img
                    src={
                      product._id
                        ? `http://localhost:5000/${product.image}`
                        : product.image
                    }
                    alt=""
                    className="h-[220px] w-full object-cover rounded-md cursor-pointer group-hover:translate-y-[-10px] transition-all duration-500"
                  />
                  <div className="py-3">
                    <h3 className="font-semibold px-3">{product.title}</h3>
                    <p className="text-sm text-gray-600 px-3 dark:text-white">{product.color}</p>
                    <div className="flex items-center gap-1 px-3">
                      <FaStar className="text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* view all button */}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate("/products");
                  scrollTo(0, 0);
                }}
                className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
              >
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductList;
