import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/ProductSlice";
import { FaStar } from "react-icons/fa6";
import { ProductContext } from "../../context/ProductContext";

function ProductList() {
 
  const {productData} = useContext(ProductContext)

  const [products,setProducts] = useState([])
  useEffect(() => {
   setProducts(productData)
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const paginate = (array, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return array.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = paginate(products, currentPage, itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (status === "loading") return <p>Loading products...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

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

        {/* Products Grid */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {currentProducts.map((product, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100} // Adjusted delay multiplier
                key={i}
                className="space-y-3 dark:border-white dark:border-2 w-full dark:border-solid dark:rounded"
              >
                <img
                  src={product.image}
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
            <div className="pagination flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {index + 1}
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
