import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useShop from "../../hooks/useShop";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, refetch] = useShop();

  // Filtered products by search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">Student Shop</h2>

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
