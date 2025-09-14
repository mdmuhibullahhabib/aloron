import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import useShop from "../../../hooks/useShop";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products] = useShop();
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  

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

  // handle add to cart (only MongoDB)
  const handleAddToCart = async (goToCheckout = false) => {
    if (!user?.email) {
      Swal.fire({
        icon: "warning",
        title: "Please login to add items to cart",
        timer: 2000,
      });
      navigate("/auth/signin");
      return;
    }

    const dbCartItem = {
      productId: product._id,
      name: product.name,
      image: product.thumbnail,
      price: product.price,
      quantity: quantity,
      email: user.email,
      addedAt: new Date(),
    };

    try {
      const res = await axiosPublic.post("/cart", dbCartItem);
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Added to Cart!",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          if (goToCheckout) navigate("/checkout");
          else navigate("/cart");
        });
      }
    } catch (error) {
      console.error("Error posting to cart:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to add to cart",
      });
    }
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
          <p className="text-sm text-gray-500 mb-2">
            Category: {product.category}
          </p>
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
            onClick={() => handleAddToCart(false)}
            className="btn btn-primary w-full flex items-center gap-2 mb-3"
            disabled={product.stock === 0}
          >
            <FaShoppingCart /> Add to Cart
          </button>

          {/* Buy Now Button */}
          <button
            onClick={() => handleAddToCart(true)}
            className="btn btn-secondary w-full flex items-center gap-2"
            disabled={product.stock === 0}
          >
            <FaShoppingCart /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
