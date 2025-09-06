import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

const [products,refetch] = useS
  // Filtered products by search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Our Shop</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center border rounded-full shadow-sm bg-white p-2 w-full max-w-md">
          <FaSearch className="text-gray-400 ml-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none px-3 py-1 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-4 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-xl"
              />
              <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
              <p className="text-lg font-bold mt-2">${product.price}</p>

              <button className="mt-4 flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 w-full">
                <FaShoppingCart className="mr-2" /> Buy Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default Shop;
