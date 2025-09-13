import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get transaction info from location state (you can also fetch from backend if needed)
  const { email, transactionId, amount } = location.state || {};

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200 p-4">
      <div className="bg-white shadow-lg rounded-2xl max-w-lg w-full p-8 text-center animate-fadeIn">
        <FaCheckCircle className="mx-auto text-green-500 text-6xl mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase, <span className="font-medium">{email}</span>.
        </p>

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-left">
          <p className="text-gray-700"><span className="font-medium">Transaction ID:</span> {transactionId}</p>
          <p className="text-gray-700"><span className="font-medium">Amount Paid:</span> ৳{amount}</p>
          <p className="text-gray-700"><span className="font-medium">Status:</span> Completed</p>
        </div>

        <button
          onClick={handleGoHome}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
