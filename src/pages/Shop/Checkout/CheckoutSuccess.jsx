import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const CheckoutSuccess = () => {
  return (
    <>
      <title>CheckoutSuccess - Prottaysha</title>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h2 className="text-2xl text-green-600 font-bold mb-2">Thank You for Your Order!</h2>
          <p className="text-gray-600 mb-6">
            Your order has been placed successfully. We'll notify you once it's shipped.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckoutSuccess;