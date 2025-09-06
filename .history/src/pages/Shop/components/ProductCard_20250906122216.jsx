import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
     className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-xl overflow-hidden">
      {/* Thumbnail */}
      <figure>
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-indigo-600 font-bold text-lg">
            ৳{product.price}
          </span>
          <button className="btn btn-sm btn-primary flex items-center gap-2">
            <FaShoppingCart /> Add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
