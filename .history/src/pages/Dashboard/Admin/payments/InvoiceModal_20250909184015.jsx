import React from "react";
import { FaTimes } from "react-icons/fa";

const InvoiceModal = ({ payment, onClose }) => {
  if (!payment) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FaTimes size={18} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-4">ইনভয়েস</h2>

        {/* Invoice Info */}
        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-bold">ছাত্রের নাম:</span>{" "}
            {payment.studentName}
          </p>
          <p>
            <span className="font-bold">ইমেইল:</span> {payment.email}
          </p>
          <p>
            <span className="font-bold">মোবাইল:</span> {payment.phone}
          </p>
          <p>
            <span className="font-bold">কোর্স:</span> {payment.courseName}
          </p>
          <p>
            <span className="font-bold">পরিমাণ:</span> {payment.amount} ৳
          </p>
          <p>
            <span className="font-bold">তারিখ:</span>{" "}
            {new Date(payment.date).toLocaleDateString("bn-BD")}
          </p>
          <p>
            <span className="font-bold">স্ট্যাটাস:</span>{" "}
            <span
              className={`px-2 py-1 rounded-full text-white text-sm ${
                payment.status === "Paid" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {payment.status}
            </span>
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
