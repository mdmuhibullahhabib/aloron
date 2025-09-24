import React, { useState } from "react";
import { FaSearch, FaShoppingBag, FaBookOpen, FaGift } from "react-icons/fa";
import useShop from "../../hooks/useShop";
import ProductCard from "./components/ProductCard";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, refetch] = useShop();

  // Filtered products by search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Student Shop Banner */}
      {/* <section className="relative bg-gradient-to-r from-indigo-100 via-pink-100 to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-xl overflow-hidden mb-10">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-14 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <FaShoppingBag className="text-5xl text-indigo-600 dark:text-indigo-400 animate-bounce" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            🎓 Welcome to the{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Student Shop
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Find all your study essentials in one place — from{" "}
            <span className="font-semibold text-pink-500 dark:text-pink-400">
              MCQ books
            </span>{" "}
            to{" "}
            <span className="font-semibold text-purple-500 dark:text-purple-400">
              exclusive student gear
            </span>
            . Shop smarter, learn better! ✨
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 dark:hover:bg-indigo-500 transition transform hover:scale-105 flex items-center gap-2">
              <FaBookOpen /> Explore Courses
            </button>
            <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 dark:hover:bg-pink-400 transition transform hover:scale-105 flex items-center gap-2">
              <FaGift /> Special Offers
            </button>
          </div>
        </div>
      {/* </section> */} */}

      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-6">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
