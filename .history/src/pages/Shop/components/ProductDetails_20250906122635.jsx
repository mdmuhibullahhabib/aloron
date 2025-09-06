import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import useShop from "../../../hooks/useShop";

const ProductDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [products] = useShop();

  // find product by id
  const product = products.find((p) => p._id === id);

  if (!product) {
    return <p className="text-center text-gray-500">Product not found</p>;
  }

    // handle quantity change
  const increaseQty = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        className="btn btn-sm btn-outline mb-6 flex items-center gap-2"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> Back
      </button>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-base-100 shadow-lg rounded-xl p-6">
        {/* Left: Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="rounded-xl w-full h-80 object-cover"
          />
        </div>

        {/* Right: Details */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Price & Stock */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold text-indigo-600">
              ৳{product.price}
            </span>
            <span
              className={`badge ${
                product.stock > 0 ? "badge-success" : "badge-error"
              }`}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

                    {/* Quantity Selector */}
          <div className="flex items-center gap-3 mb-6">
            <button
              className="btn btn-sm btn-outline"
              onClick={decreaseQty}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-4 py-2 border rounded-md">{quantity}</span>
            <button
              className="btn btn-sm btn-outline"
              onClick={increaseQty}
              disabled={quantity >= product.stock}
            >
              +
            </button>
          </div>


          {/* Add to Cart Button */}
          <button
            className="btn btn-primary w-full flex items-center gap-2"
            disabled={product.stock === 0}
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
