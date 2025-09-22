import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const ProductCard = ({ product }) => {
  // ✅ Handle Add to Cart
  const handleAddToCart = async (e) => {
    e.preventDefault(); // Stop navigating to product details
    try {
      const res = await axios.post("/api/cart", {
        productId: product._id,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      });

      if (res.status === 200) {
        toast.success(`${product.name} added to cart`);
      }
    } catch (error) {
      toast.error("Failed to add to cart");
      console.error(error);
    }
  };

  return (
    <Link
      to={`/product/${product._id}`}
      className="card shadow-lg hover:shadow-2xl transition rounded-2xl overflow-hidden border border-gray-100 group"
    >
      {/* Thumbnail */}
      <figure className="relative">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-52 w-full object-cover transform group-hover:scale-105 transition duration-300"
        />

        {/* Category Badge */}
        <span className="absolute top-2 left-2 bg-indigo-600 text-xs font-semibold px-2 py-1 rounded-full shadow">
          {product.category}
        </span>
      </figure>

      {/* Card Body */}
      <div className="card-body p-5 flex flex-col justify-between h-full">
        {/* Product Name */}
        <h3 className="text-lg font-bold group-hover:text-indigo-600 transition">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm line-clamp-2 mt-1">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-indigo-600 font-extrabold text-xl">
            ৳{product.price}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg flex items-center gap-2 transition transform hover:scale-105"
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
